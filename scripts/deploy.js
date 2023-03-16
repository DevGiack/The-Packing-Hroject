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


  const mint = async () => {
    const mint1 = await tph.safeMint("0xb3faf97A9A9f6C0a54C6ddFDC4a188E702a45205")
    console.log(mint1)
    const mint2 = await tph.safeMint("0xb3faf97A9A9f6C0a54C6ddFDC4a188E702a45205")
    console.log(mint2)
    const mint3 = await tph.safeMint("0xb3faf97A9A9f6C0a54C6ddFDC4a188E702a45205")
    console.log(mint3)
  } 

  await mint()
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
