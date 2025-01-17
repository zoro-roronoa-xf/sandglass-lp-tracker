import { BorshAccountsCoder, BN, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey, Connection, SYSVAR_CLOCK_PUBKEY } from "@solana/web3.js";
import { AccountLayout, MintLayout } from "@solana/spl-token";
import { PythHttpClient, getPythClusterApiUrl, getPythProgramKeyForCluster } from "@pythnetwork/client";
import Decimal from "decimal.js";
import { SandglassEclilpseProgramID, SandglassMarketList } from "./markets";
import { getTETHPrice, getETHUSDCPrice, getMultipleAccounts, getParsedAmount, getAssociatedTokenAddress } from "./utls";
import { SandglassEclipse, IDL } from "./idl/sandglass_eclipse";

type MarketToken = {
  name: string;
  address: string;
  decimals: string;
};
type MarketInfo = {
  marketAccount: string;
  symbol: string;
  tokenSY: MarketToken;
  tokenPT: MarketToken;
  tokenYT: MarketToken;
  tokenLP: MarketToken;
};
type TMarketData = IdlAccounts<SandglassEclipse>["market"];
type TSandglassData = IdlAccounts<SandglassEclipse>["sandglassAccount"];

export async function getUserToken(connection: Connection, userWalletAddress: PublicKey) {
  for (const marketInfo of SandglassMarketList) {
    const { marketData, mintAmount, lpSupplyAmount, ptPoolAmount, ytPoolAmount, epochStartTimestamp, epoch, solanaTimestamp } = await getMarket(connection, marketInfo);

    const pythClient = new PythHttpClient(new Connection(getPythClusterApiUrl("pythnet")), getPythProgramKeyForCluster("pythnet"));
    const ybtBaseTokenPrice = Number(await getYBTPrice(marketInfo, marketData, pythClient));
    const { marketEndPrice, marketSolPrice } = getMarketAPY(marketData, ybtBaseTokenPrice, solanaTimestamp, epoch, epochStartTimestamp);
    const ptPrice = getPTPrice(marketData, marketEndPrice);
    const ytPrice = getYTPrice(marketData, ptPrice, marketSolPrice);
    const { poolPtPrice, poolYtPrice } = getPoolPrice(marketData, ptPoolAmount, ytPoolAmount, ptPrice, ytPrice, solanaTimestamp);

    const poolValue = ptPoolAmount
      .div(10 ** Number(marketInfo.tokenPT.decimals))
      .mul(poolPtPrice)
      .plus(ytPoolAmount.div(10 ** Number(marketInfo.tokenPT.decimals)).mul(poolYtPrice));
    const lpSyValue = poolValue.div(lpSupplyAmount.div(10 ** Number(marketInfo.tokenLP.decimals)));
    const baseTokenPrice = await getBaseTokenPrice(marketInfo, marketData, pythClient);

    const sandglassAccount = await getSandglassAccount(connection, marketInfo.marketAccount, new PublicKey(userWalletAddress));

    let stakeLpValue = 0;
    if (sandglassAccount) {
      const stakeLpAmount = new Decimal(sandglassAccount.stakeInfo.stakeLpAmount.toString()).div(10 ** Number(marketInfo.tokenLP.decimals));
      stakeLpValue = stakeLpAmount.mul(lpSyValue).mul(marketSolPrice).mul(baseTokenPrice).toNumber();
    }

    const walletLpAmount = (await getUserWalletLp(connection, marketData, userWalletAddress)).div(10 ** Number(marketInfo.tokenLP.decimals));
    const walletLpValue = walletLpAmount.mul(lpSyValue).mul(marketSolPrice).mul(baseTokenPrice).toNumber();
    const totalUserValue = stakeLpValue + walletLpValue;

    return { address: userWalletAddress.toString(), total: totalUserValue, staked: stakeLpValue, unstaked: walletLpValue };
  }
}

async function getMarket(connection: Connection, marketInfo: MarketInfo): Promise<any> {
  const marketAccountInfo = await connection.getAccountInfo(new PublicKey(marketInfo.marketAccount));
  if (marketAccountInfo) {
    const data = Buffer.from(marketAccountInfo.data);
    const coder = new BorshAccountsCoder(IDL);
    const marketData: TMarketData = coder.decode("market", data);

    let publicKeys: PublicKey[] = [marketData.tokenPtMintAddress, marketData.tokenLpMintAddress, marketData.poolPtTokenAccount, marketData.poolYtTokenAccount, SYSVAR_CLOCK_PUBKEY];

    const accountInfos = await getMultipleAccounts(connection, publicKeys);

    let mintAmount = new Decimal(0);
    let lpSupplyAmount = new Decimal(0);
    let ptPoolAmount = new Decimal(0);
    let ytPoolAmount = new Decimal(0);
    let epochStartTimestamp = 0;
    let epoch = 0;
    let solanaTimestamp = 0;
    for (const accountInfo of accountInfos) {
      if (accountInfo?.publicKey.toString() === marketData.tokenPtMintAddress.toString()) {
        if (accountInfo) {
          const parsed = MintLayout.decode(accountInfo?.account.data);
          mintAmount = new Decimal(getParsedAmount(parsed.supply));
        }
      } else if (accountInfo?.publicKey.toString() === marketData.tokenLpMintAddress.toString()) {
        if (accountInfo) {
          const parsed = MintLayout.decode(accountInfo?.account.data);
          lpSupplyAmount = new Decimal(getParsedAmount(parsed.supply));
        }
      } else if (accountInfo?.publicKey.toString() === marketData.poolPtTokenAccount.toString()) {
        if (accountInfo) {
          const parsed = AccountLayout.decode(accountInfo.account.data);
          ptPoolAmount = new Decimal(getParsedAmount(parsed.amount));
        }
      } else if (accountInfo?.publicKey.toString() === marketData.poolYtTokenAccount.toString()) {
        if (accountInfo) {
          const parsed = AccountLayout.decode(accountInfo.account.data);
          ytPoolAmount = new Decimal(getParsedAmount(parsed.amount));
        }
      } else if (accountInfo?.publicKey.toString() === SYSVAR_CLOCK_PUBKEY.toString()) {
        if (accountInfo) {
          epochStartTimestamp = Number(Buffer.from(accountInfo.account.data.slice(8, 16)).readBigInt64LE());
          epoch = Number(Buffer.from(accountInfo.account.data.slice(16, 24)).readBigUInt64LE());
          solanaTimestamp = Number(Buffer.from(accountInfo.account.data.slice(32, 40)).readBigInt64LE());
        }
      }
    }

    return { marketData, mintAmount, lpSupplyAmount, ptPoolAmount, ytPoolAmount, epochStartTimestamp, epoch, solanaTimestamp };
  }
}

const getMarketConcentration = (solanaTimestamp: number, marketData: TMarketData): Decimal => {
  const initialConcentration = new Decimal(marketData.poolConfig.initialConcentration.toString());
  const maturityConcentration = new Decimal(marketData.poolConfig.maturityConcentration.toString());

  if (maturityConcentration.eq(new Decimal(0))) {
    return initialConcentration;
  }

  if (marketData.marketConfig.endTime.lte(new BN(solanaTimestamp))) {
    return maturityConcentration;
  }

  const timeDiff = new Decimal(solanaTimestamp).sub(new Decimal(marketData.marketConfig.startTime.toString()));
  const totalDiff = new Decimal(marketData.marketConfig.endTime.toString()).sub(new Decimal(marketData.marketConfig.startTime.toString()));
  const delta = maturityConcentration.sub(initialConcentration).mul(timeDiff).div(totalDiff);
  const concentration = initialConcentration.add(delta);

  return concentration;
};

function getMarketAPY(marketData: TMarketData, solPrice: number, nowTime: number, epoch: number, epochStartTimeStamp: number) {
  const yearTime = new Decimal(365).times(24).times(60).times(60);
  const solanaTime = new Decimal(nowTime);
  const priceBase = new Decimal(marketData.marketConfig.priceBase.toString());
  const solPriceBI = new Decimal(solPrice).mul(priceBase).floor();

  const epochStartTime = new Decimal(epochStartTimeStamp);
  const updateSkipTime = new Decimal(marketData.marketConfig.updateSkipTime.toString());
  const compoundingPeriod = new Decimal(marketData.marketConfig.compoundingPeriod.toString());

  if (marketData.marketConfig.marketType.eq(new BN("0"))) {
    let marketApy = new Decimal(marketData.marketConfig.marketApy.toString()).div(priceBase);
    let marketSolPrice = new Decimal(marketData.marketConfig.marketSolPrice.toString()).div(priceBase);
    let marketEndPrice = new Decimal(marketData.marketConfig.marketEndPrice.toString()).div(priceBase);

    const nowTime = new Date();
    const endTime = new Date(Number(marketData.marketConfig.endTime) * 1000);

    let marketState = nowTime < endTime;

    if (marketState && marketSolPrice.lt(solPrice)) {
      const startPrice = new Decimal(marketData.marketConfig.startPrice.toString());
      const startTime = new Decimal(marketData.marketConfig.startTime.toString());
      const endTime = new Decimal(marketData.marketConfig.endTime.toString());
      const marketTime = endTime.minus(startTime);

      let epochCount = new Decimal(0);
      let yearEpoch = new Decimal(0);
      let marketEpoch = new Decimal(0);

      if (compoundingPeriod.eq(new Decimal(0))) {
        const lastUpdateEpoch = new Decimal(marketData.marketConfig.lastUpdateEpoch.toString());
        const nowEpoch = new Decimal(epoch);

        if (solanaTime.gt(epochStartTime.plus(updateSkipTime)) && nowEpoch.gte(lastUpdateEpoch)) {
          epochCount = new Decimal(epoch).minus(new Decimal(marketData.marketConfig.startEpoch.toString()));
          const timeDiff = epochStartTime.minus(startTime);
          yearEpoch = yearTime.div(timeDiff).mul(epochCount);
          marketEpoch = epochCount.mul(marketTime).div(timeDiff);
        }
      } else {
        const lastUpdateTime = new Decimal(marketData.marketConfig.lastUpdateTime.toString());
        if (solanaTime.gt(lastUpdateTime.add(updateSkipTime))) {
          const timeDiff = solanaTime.sub(startTime);
          epochCount = timeDiff.div(compoundingPeriod);
          yearEpoch = yearTime.div(compoundingPeriod);
          marketEpoch = marketTime.div(compoundingPeriod);
        }
      }

      if (epochCount.gt(new Decimal(0))) {
        const aprPlusOne = solPriceBI.div(startPrice).pow(new Decimal(1).div(epochCount));
        marketApy = aprPlusOne.pow(yearEpoch).minus(1).mul(marketData.marketConfig.priceBase.toString()).floor().div(marketData.marketConfig.priceBase.toString());
        marketSolPrice = new Decimal(solPrice);
        marketEndPrice = aprPlusOne.pow(marketEpoch).mul(startPrice.div(priceBase)).mul(priceBase).floor().div(priceBase);
      }
    }
    return { marketApy, marketEndPrice, marketSolPrice };
  } else {
    const startTime = new Decimal(marketData.marketConfig.startTime.toString());
    const timeDiff = solanaTime.sub(startTime);
    const endTime = new Decimal(marketData.marketConfig.endTime.toString());
    const marketTime = endTime.sub(startTime);
    const initialEndPrice = new Decimal(marketData.marketConfig.initialEndPrice.toString());
    const deltaPrice = initialEndPrice.sub(new Decimal(marketData.marketConfig.startPrice.toString()));

    let marketEndPrice = new Decimal(marketData.marketConfig.startPrice.toString());
    if (timeDiff.lte(marketTime)) {
      marketEndPrice = initialEndPrice.sub(deltaPrice.mul(timeDiff).div(marketTime)).div(priceBase).mul(priceBase).floor().div(priceBase);
    }
    return { marketApy: new Decimal(0), marketSolPrice: new Decimal(1), marketEndPrice };
  }
}

function getPTPrice(marketData: TMarketData, endPrice: Decimal) {
  const priceBase = new Decimal(marketData.marketConfig.priceBase.toString());
  const startPrice = new Decimal(marketData.marketConfig.startPrice.toString()).div(priceBase);
  const ptPrice = startPrice.div(endPrice).times(priceBase).floor().div(priceBase);

  if (ptPrice.greaterThan(1)) {
    return new Decimal(1);
  } else {
    return ptPrice;
  }
}

function getYTPrice(marketData: TMarketData, ptPrice: Decimal, solPrice: Decimal) {
  const priceBase = new Decimal(marketData.marketConfig.priceBase.toString());
  const startPrice = new Decimal(marketData.marketConfig.startPrice.toString()).div(priceBase);
  const ptSolPrice = ptPrice.mul(solPrice);

  return new Decimal(1).minus(ptPrice);
}

function getPoolPrice(marketData: TMarketData, ptAmount: Decimal, ytAmount: Decimal, ptPrice: Decimal, ytPrice: Decimal, solanaTimestamp: number) {
  const concentration = getMarketConcentration(solanaTimestamp, marketData);
  const virtualPt = new Decimal(ptAmount.toString()).plus(concentration);
  const virtualYt = new Decimal(ytAmount.toString()).plus(concentration);

  const poolPrice = virtualYt.div(ytPrice).div(virtualPt.div(ptPrice));

  const poolPtPrice = poolPrice.div(poolPrice.plus(1));
  const poolYtPrice = new Decimal(1).minus(poolPtPrice);

  return { poolPrice, poolPtPrice, poolYtPrice };
}

async function getYBTPrice(marketInfo: any, marketData: TMarketData, pythClient: PythHttpClient): Promise<string> {
  if (marketData.marketConfig.marketType.eq(new BN(0))) {
    if (marketInfo.symbol === "tETH") {
      return await getTETHPrice(pythClient);
    } else {
      return "0";
    }
  } else {
    return "1";
  }
}

async function getBaseTokenPrice(marketInfo: any, marketData: TMarketData, pythClient: PythHttpClient): Promise<string> {
  if (marketData.marketConfig.marketType.eq(new BN(0))) {
    if (marketInfo.symbol === "tETH") {
      return await getETHUSDCPrice(pythClient);
    } else {
      return "0";
    }
  } else {
    return "1";
  }
}

async function getSandglassAccount(connection: Connection, markeAddress: string, walletAddress: PublicKey): Promise<TSandglassData | undefined> {
  const sandglassAddress = findSandglassAddress(new PublicKey(markeAddress), walletAddress, new PublicKey(SandglassEclilpseProgramID));

  const info = await connection.getAccountInfo(sandglassAddress);

  if (info) {
    const data = Buffer.from(info!.data);
    const coder = new BorshAccountsCoder(IDL);
    const sandglassData: TSandglassData = coder.decode("sandglassAccount", data);

    return sandglassData;
  } else {
    return undefined;
  }
}

function findSandglassAddress(marketAddress: PublicKey, walletAddress: PublicKey, programId: PublicKey) {
  const sandglassAddress = PublicKey.findProgramAddressSync([marketAddress.toBuffer(), walletAddress.toBuffer()], programId);

  return sandglassAddress[0];
}

async function getUserWalletLp(connection: Connection, marketData: TMarketData, walletAddress: PublicKey) {
  const LpTokenAccountAddress = getAssociatedTokenAddress(marketData.tokenLpMintAddress, walletAddress);
  const tokenAccountinfo = await connection.getAccountInfo(LpTokenAccountAddress);
  if (tokenAccountinfo) {
    const parsed = AccountLayout.decode(tokenAccountinfo.data);
    const amount = getParsedAmount(parsed.amount);

    return new Decimal(amount);
  } else {
    return new Decimal(0);
  }
}
