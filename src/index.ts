import { Connection, PublicKey } from "@solana/web3.js";
import { getUserToken } from "./sandglassUtls"

async function main() {
  const connection = new Connection("https://mainnetbeta-rpc.eclipse.xyz", "processed");
  const walletAddress = new PublicKey("---user wallet address---");

  const result = await getUserToken(connection,walletAddress)
  console.log(result)
}

main();
