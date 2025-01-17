export type SandglassEclipse = {
  version: "0.1.0";
  name: "sandglass_eclipse";
  instructions: [
    {
      name: "initializeMarket";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vaultLpTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "InitMarketArgs";
          };
        },
      ];
    },
    {
      name: "initializeSandglassAccount";
      accounts: [
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: "updateMarketConfig";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "priceBase";
          type: "u64";
        },
        {
          name: "startTime";
          type: "u64";
        },
        {
          name: "startPrice";
          type: "u64";
        },
        {
          name: "startEpoch";
          type: "u64";
        },
        {
          name: "startLpValue";
          type: "u64";
        },
        {
          name: "endTime";
          type: "u64";
        },
        {
          name: "marketEndPrice";
          type: "u64";
        },
        {
          name: "marketApy";
          type: "u64";
        },
        {
          name: "updateSkipTime";
          type: "u64";
        },
        {
          name: "lastUpdateEpoch";
          type: "u64";
        },
        {
          name: "marketSolPrice";
          type: "u64";
        },
        {
          name: "lastUpdateTime";
          type: "u64";
        },
        {
          name: "compoundingPeriod";
          type: "u64";
        },
        {
          name: "maxPriceThreshold";
          type: "u64";
        },
        {
          name: "marketType";
          type: "u64";
        },
        {
          name: "initialEndPrice";
          type: "u64";
        },
      ];
    },
    {
      name: "updateFees";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "tradeFeeNumerator";
          type: "u64";
        },
        {
          name: "platformFeeNumerator";
          type: "u64";
        },
        {
          name: "yieldFeeNumerator";
          type: "u64";
        },
        {
          name: "feeDenominator";
          type: "u64";
        },
      ];
    },
    {
      name: "updateFreeze";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "market";
          type: "u8";
        },
        {
          name: "mint";
          type: "u8";
        },
        {
          name: "redeem";
          type: "u8";
        },
        {
          name: "trade";
          type: "u8";
        },
        {
          name: "deposit";
          type: "u8";
        },
        {
          name: "withdraw";
          type: "u8";
        },
      ];
    },
    {
      name: "updatePoolConfig";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "configDenominator";
          type: "u64";
        },
        {
          name: "initialConcentration";
          type: "u64";
        },
        {
          name: "maturityConcentration";
          type: "u64";
        },
        {
          name: "feeTimeExp";
          type: "u64";
        },
        {
          name: "depositCapPt";
          type: "u64";
        },
      ];
    },
    {
      name: "updateOracle";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: "closeSandglassAccount";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: "mintToken";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "inputAmount";
          type: "u64";
        },
        {
          name: "mintAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "redeemToken";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "inputPtAmount";
          type: "u64";
        },
        {
          name: "inputYtAmount";
          type: "u64";
        },
        {
          name: "redeemAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "stakePt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "stakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "stakeYt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "stakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "stakeLp";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "stakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "unstakePt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "unstakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "unstakeYt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "unstakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "unstakeLp";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "unstakeAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "swapPtSy";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userDestination";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "swapAmountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "swapYtSy";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userDestination";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "swapAmountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "swapSyPt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "swapSyYt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "swapPtYt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "swapYtPt";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSource";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minimumAmountOut";
          type: "u64";
        },
      ];
    },
    {
      name: "depositPool";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "DepositPoolArgs";
          };
        },
      ];
    },
    {
      name: "depositSy";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "DepositSYArgs";
          };
        },
      ];
    },
    {
      name: "withdrawPool";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "lpAmount";
          type: "u64";
        },
        {
          name: "minimumPtAmount";
          type: "u64";
        },
        {
          name: "minimumYtAmount";
          type: "u64";
        },
      ];
    },
    {
      name: "withdrawSwap";
      accounts: [
        {
          name: "marketAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketSigner";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sandglassAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeLpTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultPtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultYtTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vaultSyTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenPtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenYtMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenLpMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenSyMintAddress";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "syTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "args";
          type: {
            defined: "WithdrawSwapArgs";
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: "market";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bumpSeed";
            type: "u8";
          },
          {
            name: "freeze";
            type: {
              defined: "Freeze";
            };
          },
          {
            name: "marketSigner";
            type: "publicKey";
          },
          {
            name: "tokenProgram";
            type: "publicKey";
          },
          {
            name: "marketInfo";
            type: {
              defined: "MarketInfo";
            };
          },
          {
            name: "marketConfig";
            type: {
              defined: "MarketConfig";
            };
          },
          {
            name: "poolConfig";
            type: {
              defined: "PoolConfig";
            };
          },
          {
            name: "oracleAccount";
            type: "publicKey";
          },
          {
            name: "tokenSyMintAddress";
            type: "publicKey";
          },
          {
            name: "tokenPtMintAddress";
            type: "publicKey";
          },
          {
            name: "tokenYtMintAddress";
            type: "publicKey";
          },
          {
            name: "tokenLpMintAddress";
            type: "publicKey";
          },
          {
            name: "poolPtTokenAccount";
            type: "publicKey";
          },
          {
            name: "poolYtTokenAccount";
            type: "publicKey";
          },
          {
            name: "vaultSyTokenAccount";
            type: "publicKey";
          },
          {
            name: "vaultPtTokenAccount";
            type: "publicKey";
          },
          {
            name: "vaultYtTokenAccount";
            type: "publicKey";
          },
          {
            name: "vaultLpTokenAccount";
            type: "publicKey";
          },
          {
            name: "feeLpTokenAccount";
            type: "publicKey";
          },
          {
            name: "marketAddress1";
            type: "publicKey";
          },
          {
            name: "marketAddress2";
            type: "publicKey";
          },
          {
            name: "marketAddress3";
            type: "publicKey";
          },
          {
            name: "marketAddress4";
            type: "publicKey";
          },
          {
            name: "marketAddress5";
            type: "publicKey";
          },
          {
            name: "marketAddress6";
            type: "publicKey";
          },
          {
            name: "marketAddress7";
            type: "publicKey";
          },
        ];
      };
    },
    {
      name: "sandglassAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bumpSeed";
            type: "u8";
          },
          {
            name: "marketAccount";
            type: "publicKey";
          },
          {
            name: "userAddress";
            type: "publicKey";
          },
          {
            name: "tradeInfo";
            type: {
              defined: "TradeInfo";
            };
          },
          {
            name: "stakeInfo";
            type: {
              defined: "StakeInfo";
            };
          },
          {
            name: "sandglassAddress1";
            type: "publicKey";
          },
          {
            name: "sandglassAddress2";
            type: "publicKey";
          },
          {
            name: "sandglassAddress3";
            type: "publicKey";
          },
          {
            name: "sandglassAddress4";
            type: "publicKey";
          },
          {
            name: "sandglassAddress5";
            type: "publicKey";
          },
        ];
      };
    },
  ];
  types: [
    {
      name: "DepositPoolArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "inputPt";
            type: "u8";
          },
          {
            name: "ptAmount";
            type: "u64";
          },
          {
            name: "ytAmount";
            type: "u64";
          },
          {
            name: "lpAmount";
            type: "u64";
          },
          {
            name: "swapAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "DepositSYArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "isPt";
            type: "bool";
          },
          {
            name: "ptAmount";
            type: "u64";
          },
          {
            name: "ytAmount";
            type: "u64";
          },
          {
            name: "lpAmount";
            type: "u64";
          },
          {
            name: "mintAmount";
            type: "u64";
          },
          {
            name: "swapAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "InitMarketArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "startPrice";
            type: "u64";
          },
          {
            name: "marketApy";
            type: "u64";
          },
          {
            name: "startTime";
            type: "u64";
          },
          {
            name: "endTime";
            type: "u64";
          },
          {
            name: "priceBase";
            type: "u64";
          },
          {
            name: "compoundingPeriod";
            type: "u64";
          },
          {
            name: "maxPriceThreshold";
            type: "u64";
          },
          {
            name: "marketType";
            type: "u64";
          },
          {
            name: "initialEndPrice";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "WithdrawSwapArgs";
      type: {
        kind: "struct";
        fields: [
          {
            name: "outputMode";
            type: "u8";
          },
          {
            name: "lpAmount";
            type: "u64";
          },
          {
            name: "swapAmount";
            type: "u64";
          },
          {
            name: "minimumOutputAmount";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "MarketInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "vaultSyAmount";
            type: "u64";
          },
          {
            name: "vaultPtAmount";
            type: "u64";
          },
          {
            name: "vaultYtAmount";
            type: "u64";
          },
          {
            name: "vaultLpAmount";
            type: "u64";
          },
          {
            name: "volume";
            type: "u64";
          },
          {
            name: "feeTrade";
            type: "u64";
          },
          {
            name: "feePlatform";
            type: "u64";
          },
          {
            name: "feeTradeVolume";
            type: "u64";
          },
          {
            name: "feePlatformVolume";
            type: "u64";
          },
          {
            name: "infoTemp1";
            type: "u64";
          },
          {
            name: "infoTemp2";
            type: "u64";
          },
          {
            name: "infoTemp3";
            type: "u64";
          },
          {
            name: "infoTemp4";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "MarketConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "priceBase";
            type: "u64";
          },
          {
            name: "startTime";
            type: "u64";
          },
          {
            name: "startPrice";
            type: "u64";
          },
          {
            name: "startEpoch";
            type: "u64";
          },
          {
            name: "startLpValue";
            type: "u64";
          },
          {
            name: "endTime";
            type: "u64";
          },
          {
            name: "marketEndPrice";
            type: "u64";
          },
          {
            name: "marketApy";
            type: "u64";
          },
          {
            name: "updateSkipTime";
            type: "u64";
          },
          {
            name: "lastUpdateEpoch";
            type: "u64";
          },
          {
            name: "marketSolPrice";
            type: "u64";
          },
          {
            name: "lastUpdateTime";
            type: "u64";
          },
          {
            name: "compoundingPeriod";
            type: "u64";
          },
          {
            name: "maxPriceThreshold";
            type: "u64";
          },
          {
            name: "marketType";
            type: "u64";
          },
          {
            name: "initialEndPrice";
            type: "u64";
          },
          {
            name: "marketConfig4";
            type: "u64";
          },
          {
            name: "marketConfig5";
            type: "u64";
          },
          {
            name: "marketConfig6";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "Freeze";
      type: {
        kind: "struct";
        fields: [
          {
            name: "market";
            type: "u8";
          },
          {
            name: "mint";
            type: "u8";
          },
          {
            name: "redeem";
            type: "u8";
          },
          {
            name: "trade";
            type: "u8";
          },
          {
            name: "deposit";
            type: "u8";
          },
          {
            name: "withdraw";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "Fees";
      type: {
        kind: "struct";
        fields: [
          {
            name: "feeDenominator";
            type: "u64";
          },
          {
            name: "tradeFeeNumerator";
            type: "u64";
          },
          {
            name: "platformFeeNumerator";
            type: "u64";
          },
          {
            name: "yieldFeeNumerator";
            type: "u64";
          },
          {
            name: "feeNumerator1";
            type: "u64";
          },
          {
            name: "feeNumerator2";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "PoolConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "fees";
            type: {
              defined: "Fees";
            };
          },
          {
            name: "configDenominator";
            type: "u64";
          },
          {
            name: "initialConcentration";
            type: "u64";
          },
          {
            name: "maturityConcentration";
            type: "u64";
          },
          {
            name: "poolConfig8";
            type: "u64";
          },
          {
            name: "poolConfig9";
            type: "u64";
          },
          {
            name: "feeTimeExp";
            type: "u64";
          },
          {
            name: "depositCapPt";
            type: "u64";
          },
          {
            name: "poolConfig1";
            type: "u64";
          },
          {
            name: "poolConfig2";
            type: "u64";
          },
          {
            name: "poolConfig3";
            type: "u64";
          },
          {
            name: "poolConfig4";
            type: "u64";
          },
          {
            name: "poolConfig5";
            type: "u64";
          },
          {
            name: "poolConfig6";
            type: "u64";
          },
          {
            name: "poolConfig7";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "TradeInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "volume";
            type: "u64";
          },
          {
            name: "tradeInfo1";
            type: "u64";
          },
          {
            name: "tradeInfo2";
            type: "u64";
          },
          {
            name: "tradeInfo3";
            type: "u64";
          },
          {
            name: "tradeInfo4";
            type: "u64";
          },
          {
            name: "tradeInfo5";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "StakeInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stakePtAmount";
            type: "u64";
          },
          {
            name: "stakePtTime";
            type: "i64";
          },
          {
            name: "stakePtPriceSy";
            type: "u64";
          },
          {
            name: "stakePtPricePt";
            type: "u64";
          },
          {
            name: "stakeYtAmount";
            type: "u64";
          },
          {
            name: "stakeYtTime";
            type: "i64";
          },
          {
            name: "stakeYtPriceSy";
            type: "u64";
          },
          {
            name: "stakeYtPriceYt";
            type: "u64";
          },
          {
            name: "stakeLpAmount";
            type: "u64";
          },
          {
            name: "stakeLpTime";
            type: "i64";
          },
          {
            name: "stakeLpPriceSy";
            type: "u64";
          },
          {
            name: "staleInfo1";
            type: "u64";
          },
          {
            name: "staleInfo2";
            type: "u64";
          },
          {
            name: "staleInfo3";
            type: "u64";
          },
          {
            name: "staleInfo4";
            type: "u64";
          },
          {
            name: "staleInfo5";
            type: "u64";
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: "ExceededSlippage";
      msg: "Exceeded Slippage";
    },
    {
      code: 6001;
      name: "ZeroTradingTokens";
      msg: "Zero Trading Tokens";
    },
    {
      code: 6002;
      name: "ProgramIsFrozen";
      msg: "Program is Frozen";
    },
    {
      code: 6003;
      name: "MarketNotStart";
      msg: "Market Not Start";
    },
    {
      code: 6004;
      name: "MarketEnd";
      msg: "Market End";
    },
    {
      code: 6005;
      name: "VaultNotEnough";
      msg: "Vault Not Enough";
    },
    {
      code: 6006;
      name: "UserNotEnough";
      msg: "User Not Enough";
    },
    {
      code: 6007;
      name: "OverCapAmount";
      msg: "Over Pool Cap Amount";
    },
    {
      code: 6008;
      name: "InvalidInput";
      msg: "Invalid Input";
    },
    {
      code: 6009;
      name: "IncorrectAccount";
      msg: "Incorrect Account";
    },
    {
      code: 6010;
      name: "IncorrectSandglassAccount";
      msg: "Incorrect SandglassAccount";
    },
    {
      code: 6011;
      name: "InvalidAmountIn";
      msg: "Invalid Amount In";
    },
    {
      code: 6012;
      name: "MismatchMint";
      msg: "Mismatch Mint";
    },
    {
      code: 6013;
      name: "InvalidOwner";
      msg: "Invalid Owner";
    },
    {
      code: 6014;
      name: "InvalidPayer";
      msg: "Invalid Payer";
    },
    {
      code: 6015;
      name: "IntegerOverflow";
      msg: "Conversion between integers failed";
    },
    {
      code: 6016;
      name: "MathOverflow";
      msg: "Math operation overflow";
    },
    {
      code: 6017;
      name: "InvalidPrice";
      msg: "Invalid Price";
    },
    {
      code: 6018;
      name: "NotEnoughLiquidity";
      msg: "Not enough pool liquidity";
    },
    {
      code: 6019;
      name: "MarketPriceOverflow";
      msg: "Market price increased too much";
    },
    {
      code: 6020;
      name: "StakeTokenRemains";
      msg: "Stake token remains";
    },
    {
      code: 6021;
      name: "InvalidMint";
      msg: "Invalid Mint";
    },
  ];
};

export const IDL: SandglassEclipse = {
  version: "0.1.0",
  name: "sandglass_eclipse",
  instructions: [
    {
      name: "initializeMarket",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vaultLpTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "InitMarketArgs",
          },
        },
      ],
    },
    {
      name: "initializeSandglassAccount",
      accounts: [
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "updateMarketConfig",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "priceBase",
          type: "u64",
        },
        {
          name: "startTime",
          type: "u64",
        },
        {
          name: "startPrice",
          type: "u64",
        },
        {
          name: "startEpoch",
          type: "u64",
        },
        {
          name: "startLpValue",
          type: "u64",
        },
        {
          name: "endTime",
          type: "u64",
        },
        {
          name: "marketEndPrice",
          type: "u64",
        },
        {
          name: "marketApy",
          type: "u64",
        },
        {
          name: "updateSkipTime",
          type: "u64",
        },
        {
          name: "lastUpdateEpoch",
          type: "u64",
        },
        {
          name: "marketSolPrice",
          type: "u64",
        },
        {
          name: "lastUpdateTime",
          type: "u64",
        },
        {
          name: "compoundingPeriod",
          type: "u64",
        },
        {
          name: "maxPriceThreshold",
          type: "u64",
        },
        {
          name: "marketType",
          type: "u64",
        },
        {
          name: "initialEndPrice",
          type: "u64",
        },
      ],
    },
    {
      name: "updateFees",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "tradeFeeNumerator",
          type: "u64",
        },
        {
          name: "platformFeeNumerator",
          type: "u64",
        },
        {
          name: "yieldFeeNumerator",
          type: "u64",
        },
        {
          name: "feeDenominator",
          type: "u64",
        },
      ],
    },
    {
      name: "updateFreeze",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "market",
          type: "u8",
        },
        {
          name: "mint",
          type: "u8",
        },
        {
          name: "redeem",
          type: "u8",
        },
        {
          name: "trade",
          type: "u8",
        },
        {
          name: "deposit",
          type: "u8",
        },
        {
          name: "withdraw",
          type: "u8",
        },
      ],
    },
    {
      name: "updatePoolConfig",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "configDenominator",
          type: "u64",
        },
        {
          name: "initialConcentration",
          type: "u64",
        },
        {
          name: "maturityConcentration",
          type: "u64",
        },
        {
          name: "feeTimeExp",
          type: "u64",
        },
        {
          name: "depositCapPt",
          type: "u64",
        },
      ],
    },
    {
      name: "updateOracle",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "closeSandglassAccount",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "mintToken",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "inputAmount",
          type: "u64",
        },
        {
          name: "mintAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "redeemToken",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "inputPtAmount",
          type: "u64",
        },
        {
          name: "inputYtAmount",
          type: "u64",
        },
        {
          name: "redeemAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "stakePt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "stakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "stakeYt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "stakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "stakeLp",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "stakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstakePt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "unstakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstakeYt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "unstakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "unstakeLp",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "unstakeAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "swapPtSy",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userDestination",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "swapAmountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapYtSy",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userDestination",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "swapAmountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapSyPt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapSyYt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapPtYt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "swapYtPt",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSource",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minimumAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "depositPool",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "DepositPoolArgs",
          },
        },
      ],
    },
    {
      name: "depositSy",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "DepositSYArgs",
          },
        },
      ],
    },
    {
      name: "withdrawPool",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "lpAmount",
          type: "u64",
        },
        {
          name: "minimumPtAmount",
          type: "u64",
        },
        {
          name: "minimumYtAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawSwap",
      accounts: [
        {
          name: "marketAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marketSigner",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sandglassAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeLpTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultPtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultYtTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vaultSyTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenPtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenYtMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenLpMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenSyMintAddress",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "syTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "args",
          type: {
            defined: "WithdrawSwapArgs",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "market",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bumpSeed",
            type: "u8",
          },
          {
            name: "freeze",
            type: {
              defined: "Freeze",
            },
          },
          {
            name: "marketSigner",
            type: "publicKey",
          },
          {
            name: "tokenProgram",
            type: "publicKey",
          },
          {
            name: "marketInfo",
            type: {
              defined: "MarketInfo",
            },
          },
          {
            name: "marketConfig",
            type: {
              defined: "MarketConfig",
            },
          },
          {
            name: "poolConfig",
            type: {
              defined: "PoolConfig",
            },
          },
          {
            name: "oracleAccount",
            type: "publicKey",
          },
          {
            name: "tokenSyMintAddress",
            type: "publicKey",
          },
          {
            name: "tokenPtMintAddress",
            type: "publicKey",
          },
          {
            name: "tokenYtMintAddress",
            type: "publicKey",
          },
          {
            name: "tokenLpMintAddress",
            type: "publicKey",
          },
          {
            name: "poolPtTokenAccount",
            type: "publicKey",
          },
          {
            name: "poolYtTokenAccount",
            type: "publicKey",
          },
          {
            name: "vaultSyTokenAccount",
            type: "publicKey",
          },
          {
            name: "vaultPtTokenAccount",
            type: "publicKey",
          },
          {
            name: "vaultYtTokenAccount",
            type: "publicKey",
          },
          {
            name: "vaultLpTokenAccount",
            type: "publicKey",
          },
          {
            name: "feeLpTokenAccount",
            type: "publicKey",
          },
          {
            name: "marketAddress1",
            type: "publicKey",
          },
          {
            name: "marketAddress2",
            type: "publicKey",
          },
          {
            name: "marketAddress3",
            type: "publicKey",
          },
          {
            name: "marketAddress4",
            type: "publicKey",
          },
          {
            name: "marketAddress5",
            type: "publicKey",
          },
          {
            name: "marketAddress6",
            type: "publicKey",
          },
          {
            name: "marketAddress7",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "sandglassAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bumpSeed",
            type: "u8",
          },
          {
            name: "marketAccount",
            type: "publicKey",
          },
          {
            name: "userAddress",
            type: "publicKey",
          },
          {
            name: "tradeInfo",
            type: {
              defined: "TradeInfo",
            },
          },
          {
            name: "stakeInfo",
            type: {
              defined: "StakeInfo",
            },
          },
          {
            name: "sandglassAddress1",
            type: "publicKey",
          },
          {
            name: "sandglassAddress2",
            type: "publicKey",
          },
          {
            name: "sandglassAddress3",
            type: "publicKey",
          },
          {
            name: "sandglassAddress4",
            type: "publicKey",
          },
          {
            name: "sandglassAddress5",
            type: "publicKey",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "DepositPoolArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "inputPt",
            type: "u8",
          },
          {
            name: "ptAmount",
            type: "u64",
          },
          {
            name: "ytAmount",
            type: "u64",
          },
          {
            name: "lpAmount",
            type: "u64",
          },
          {
            name: "swapAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "DepositSYArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "isPt",
            type: "bool",
          },
          {
            name: "ptAmount",
            type: "u64",
          },
          {
            name: "ytAmount",
            type: "u64",
          },
          {
            name: "lpAmount",
            type: "u64",
          },
          {
            name: "mintAmount",
            type: "u64",
          },
          {
            name: "swapAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "InitMarketArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "startPrice",
            type: "u64",
          },
          {
            name: "marketApy",
            type: "u64",
          },
          {
            name: "startTime",
            type: "u64",
          },
          {
            name: "endTime",
            type: "u64",
          },
          {
            name: "priceBase",
            type: "u64",
          },
          {
            name: "compoundingPeriod",
            type: "u64",
          },
          {
            name: "maxPriceThreshold",
            type: "u64",
          },
          {
            name: "marketType",
            type: "u64",
          },
          {
            name: "initialEndPrice",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "WithdrawSwapArgs",
      type: {
        kind: "struct",
        fields: [
          {
            name: "outputMode",
            type: "u8",
          },
          {
            name: "lpAmount",
            type: "u64",
          },
          {
            name: "swapAmount",
            type: "u64",
          },
          {
            name: "minimumOutputAmount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "MarketInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vaultSyAmount",
            type: "u64",
          },
          {
            name: "vaultPtAmount",
            type: "u64",
          },
          {
            name: "vaultYtAmount",
            type: "u64",
          },
          {
            name: "vaultLpAmount",
            type: "u64",
          },
          {
            name: "volume",
            type: "u64",
          },
          {
            name: "feeTrade",
            type: "u64",
          },
          {
            name: "feePlatform",
            type: "u64",
          },
          {
            name: "feeTradeVolume",
            type: "u64",
          },
          {
            name: "feePlatformVolume",
            type: "u64",
          },
          {
            name: "infoTemp1",
            type: "u64",
          },
          {
            name: "infoTemp2",
            type: "u64",
          },
          {
            name: "infoTemp3",
            type: "u64",
          },
          {
            name: "infoTemp4",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "MarketConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "priceBase",
            type: "u64",
          },
          {
            name: "startTime",
            type: "u64",
          },
          {
            name: "startPrice",
            type: "u64",
          },
          {
            name: "startEpoch",
            type: "u64",
          },
          {
            name: "startLpValue",
            type: "u64",
          },
          {
            name: "endTime",
            type: "u64",
          },
          {
            name: "marketEndPrice",
            type: "u64",
          },
          {
            name: "marketApy",
            type: "u64",
          },
          {
            name: "updateSkipTime",
            type: "u64",
          },
          {
            name: "lastUpdateEpoch",
            type: "u64",
          },
          {
            name: "marketSolPrice",
            type: "u64",
          },
          {
            name: "lastUpdateTime",
            type: "u64",
          },
          {
            name: "compoundingPeriod",
            type: "u64",
          },
          {
            name: "maxPriceThreshold",
            type: "u64",
          },
          {
            name: "marketType",
            type: "u64",
          },
          {
            name: "initialEndPrice",
            type: "u64",
          },
          {
            name: "marketConfig4",
            type: "u64",
          },
          {
            name: "marketConfig5",
            type: "u64",
          },
          {
            name: "marketConfig6",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "Freeze",
      type: {
        kind: "struct",
        fields: [
          {
            name: "market",
            type: "u8",
          },
          {
            name: "mint",
            type: "u8",
          },
          {
            name: "redeem",
            type: "u8",
          },
          {
            name: "trade",
            type: "u8",
          },
          {
            name: "deposit",
            type: "u8",
          },
          {
            name: "withdraw",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "Fees",
      type: {
        kind: "struct",
        fields: [
          {
            name: "feeDenominator",
            type: "u64",
          },
          {
            name: "tradeFeeNumerator",
            type: "u64",
          },
          {
            name: "platformFeeNumerator",
            type: "u64",
          },
          {
            name: "yieldFeeNumerator",
            type: "u64",
          },
          {
            name: "feeNumerator1",
            type: "u64",
          },
          {
            name: "feeNumerator2",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "PoolConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "fees",
            type: {
              defined: "Fees",
            },
          },
          {
            name: "configDenominator",
            type: "u64",
          },
          {
            name: "initialConcentration",
            type: "u64",
          },
          {
            name: "maturityConcentration",
            type: "u64",
          },
          {
            name: "poolConfig8",
            type: "u64",
          },
          {
            name: "poolConfig9",
            type: "u64",
          },
          {
            name: "feeTimeExp",
            type: "u64",
          },
          {
            name: "depositCapPt",
            type: "u64",
          },
          {
            name: "poolConfig1",
            type: "u64",
          },
          {
            name: "poolConfig2",
            type: "u64",
          },
          {
            name: "poolConfig3",
            type: "u64",
          },
          {
            name: "poolConfig4",
            type: "u64",
          },
          {
            name: "poolConfig5",
            type: "u64",
          },
          {
            name: "poolConfig6",
            type: "u64",
          },
          {
            name: "poolConfig7",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "TradeInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "volume",
            type: "u64",
          },
          {
            name: "tradeInfo1",
            type: "u64",
          },
          {
            name: "tradeInfo2",
            type: "u64",
          },
          {
            name: "tradeInfo3",
            type: "u64",
          },
          {
            name: "tradeInfo4",
            type: "u64",
          },
          {
            name: "tradeInfo5",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "StakeInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stakePtAmount",
            type: "u64",
          },
          {
            name: "stakePtTime",
            type: "i64",
          },
          {
            name: "stakePtPriceSy",
            type: "u64",
          },
          {
            name: "stakePtPricePt",
            type: "u64",
          },
          {
            name: "stakeYtAmount",
            type: "u64",
          },
          {
            name: "stakeYtTime",
            type: "i64",
          },
          {
            name: "stakeYtPriceSy",
            type: "u64",
          },
          {
            name: "stakeYtPriceYt",
            type: "u64",
          },
          {
            name: "stakeLpAmount",
            type: "u64",
          },
          {
            name: "stakeLpTime",
            type: "i64",
          },
          {
            name: "stakeLpPriceSy",
            type: "u64",
          },
          {
            name: "staleInfo1",
            type: "u64",
          },
          {
            name: "staleInfo2",
            type: "u64",
          },
          {
            name: "staleInfo3",
            type: "u64",
          },
          {
            name: "staleInfo4",
            type: "u64",
          },
          {
            name: "staleInfo5",
            type: "u64",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "ExceededSlippage",
      msg: "Exceeded Slippage",
    },
    {
      code: 6001,
      name: "ZeroTradingTokens",
      msg: "Zero Trading Tokens",
    },
    {
      code: 6002,
      name: "ProgramIsFrozen",
      msg: "Program is Frozen",
    },
    {
      code: 6003,
      name: "MarketNotStart",
      msg: "Market Not Start",
    },
    {
      code: 6004,
      name: "MarketEnd",
      msg: "Market End",
    },
    {
      code: 6005,
      name: "VaultNotEnough",
      msg: "Vault Not Enough",
    },
    {
      code: 6006,
      name: "UserNotEnough",
      msg: "User Not Enough",
    },
    {
      code: 6007,
      name: "OverCapAmount",
      msg: "Over Pool Cap Amount",
    },
    {
      code: 6008,
      name: "InvalidInput",
      msg: "Invalid Input",
    },
    {
      code: 6009,
      name: "IncorrectAccount",
      msg: "Incorrect Account",
    },
    {
      code: 6010,
      name: "IncorrectSandglassAccount",
      msg: "Incorrect SandglassAccount",
    },
    {
      code: 6011,
      name: "InvalidAmountIn",
      msg: "Invalid Amount In",
    },
    {
      code: 6012,
      name: "MismatchMint",
      msg: "Mismatch Mint",
    },
    {
      code: 6013,
      name: "InvalidOwner",
      msg: "Invalid Owner",
    },
    {
      code: 6014,
      name: "InvalidPayer",
      msg: "Invalid Payer",
    },
    {
      code: 6015,
      name: "IntegerOverflow",
      msg: "Conversion between integers failed",
    },
    {
      code: 6016,
      name: "MathOverflow",
      msg: "Math operation overflow",
    },
    {
      code: 6017,
      name: "InvalidPrice",
      msg: "Invalid Price",
    },
    {
      code: 6018,
      name: "NotEnoughLiquidity",
      msg: "Not enough pool liquidity",
    },
    {
      code: 6019,
      name: "MarketPriceOverflow",
      msg: "Market price increased too much",
    },
    {
      code: 6020,
      name: "StakeTokenRemains",
      msg: "Stake token remains",
    },
    {
      code: 6021,
      name: "InvalidMint",
      msg: "Invalid Mint",
    },
  ],
};
