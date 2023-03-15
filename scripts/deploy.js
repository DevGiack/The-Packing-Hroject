// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

async function main() {
  const tphFactory = await hre.ethers.getContractFactory("TPH")
  console.log("Deploying contract...")
  const tph = await tphFactory.deploy()
  await tph.deployed()
  console.log(`Deployed contract to: ${tph.address}`)
  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await tph.deployTransaction.wait(6)
    await verify(tph.address, [])
  }

  const mint = await tph.safeMint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  let test = await tph.getCounter();
  console.log(`mint du NFT #${test}`);
//  let owner = await tph.ownerOf("1");
//  console.log(`owner: ${owner}`);
  const mint2 = await tph.safeMint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  let test2 = await tph.getCounter();
  console.log(`${test2}`);
//  let owner2 = await tph.ownerOf("2");
//  console.log(`owner: ${owner2}`);
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
