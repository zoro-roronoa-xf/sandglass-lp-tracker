import { BN } from "@coral-xyz/anchor";
import { PublicKey, Connection, Commitment, AccountInfo } from "@solana/web3.js";
import { TOKEN_2022_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PythHttpClient } from "@pythnetwork/client";

export async function getMultipleAccounts(
  connection: Connection,
  publicKeys: PublicKey[],
  commitment?: Commitment
): Promise<Array<null | { publicKey: PublicKey; account: AccountInfo<Buffer> }>> {
  const accounts = await connection.getMultipleAccountsInfo(publicKeys, commitment);

  return accounts.map((account, idx) => {
    if (account === null) {
      return null;
    }
    return {
      publicKey: publicKeys[idx],
      account,
    };
  });
}

export function getParsedAmount(amount: any): string {
  let output = "0";
  if (typeof amount === "bigint") {
    output = new BN(amount.toString()).toString();
  } else {
    output = new BN(amount, 64, "le").toString();
  }
  return output;
}

export const getPythPrice = async (pythClient: PythHttpClient, crpytoKey: string): Promise<number> => {
  const pythData = await pythClient.getData();
  const price = pythData.productPrice.get(crpytoKey);
  if (price?.price && price?.confidence) {
    return price.price;
  }
  return 0;
};

export async function getTETHPrice(pythClient: PythHttpClient) {
  try {
    const price = await getPythPrice(pythClient, "Crypto.TETH/ETH.RR");
    return price.toString();
  } catch (e) {
    console.log(e);
    return "0";
  }
}

export async function getETHUSDCPrice(pythClient: PythHttpClient) {
  try {
    const price = await getPythPrice(pythClient, "Crypto.ETH/USD");
    return price.toString();
  } catch (e) {
    console.log(e);
    return "0";
  }
}

export function getAssociatedTokenAddress(mintAddress: PublicKey, walletAddress: PublicKey, tokenProgram: PublicKey = TOKEN_2022_PROGRAM_ID) {
  const tokenAdress = PublicKey.findProgramAddressSync([walletAddress.toBuffer(), tokenProgram.toBuffer(), mintAddress.toBuffer()], ASSOCIATED_TOKEN_PROGRAM_ID);

  return tokenAdress[0];
}
