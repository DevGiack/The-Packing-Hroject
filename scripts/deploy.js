// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat"

async function main() {
    const tphFactory = await hre.ethers.getContractFactory("TPH")
    console.log("Deploying contract...")
    const tph = await tphFactory.deploy()
    await tph.deployed()
    console.log(`Deployed contract to: ${tph.address}`)

    const mint = async () => {
        const mint1 = await tph.safeMint(
            "0x1126b4b4b99836F805A29905c788f157B0c31CEB"
        )
        console.log(mint1)
        const mint2 = await tph.safeMint(
            "0x1126b4b4b99836F805A29905c788f157B0c31CEB"
        )
        console.log(mint2)
        const mint3 = await tph.safeMint(
            "0x1126b4b4b99836F805A29905c788f157B0c31CEB"
        )
        console.log(mint3)
        const mint4 = await tph.safeMint(
            "0x1126b4b4b99836F805A29905c788f157B0c31CEB"
        )
        console.log(mint4)
        const mint5 = await tph.safeMint(
            "0x1126b4b4b99836F805A29905c788f157B0c31CEB"
        )
        console.log(mint5)
        const mint6 = await tph.safeMint(
            "0xf90a998b7cA950Fe8ac40d76C8BDf5cd408Da54B"
        )
        console.log(mint6)
        const mint7 = await tph.safeMint(
            "0xf90a998b7cA950Fe8ac40d76C8BDf5cd408Da54B"
        )
        console.log(mint7)
        const mint8 = await tph.safeMint(
            "0xf90a998b7cA950Fe8ac40d76C8BDf5cd408Da54B"
        )
        console.log(mint8)
        const mint9 = await tph.safeMint(
            "0xf90a998b7cA950Fe8ac40d76C8BDf5cd408Da54B"
        )
        console.log(mint9)
        const mint10 = await tph.safeMint(
            "0xf90a998b7cA950Fe8ac40d76C8BDf5cd408Da54B"
        )
        console.log(mint10)
        const mint11 = await tph.safeMint(
            "0x17Fc5581610D54932A7389612554c956516210D8"
        )
        console.log(mint11)
        const mint12 = await tph.safeMint(
            "0x17Fc5581610D54932A7389612554c956516210D8"
        )
        console.log(mint12)
        const mint13 = await tph.safeMint(
            "0x17Fc5581610D54932A7389612554c956516210D8"
        )
        console.log(mint13)
        const mint14 = await tph.safeMint(
            "0x17Fc5581610D54932A7389612554c956516210D8"
        )
        console.log(mint14)
        const mint15 = await tph.safeMint(
            "0x17Fc5581610D54932A7389612554c956516210D8"
        )
        console.log(mint15)
        const mint16 = await tph.safeMint(
            "0xb78D40C04a5e5176FA32260945939BB075C34696"
        )
        console.log(mint16)
        const mint17 = await tph.safeMint(
            "0xb78D40C04a5e5176FA32260945939BB075C34696"
        )
        console.log(mint17)
        const mint18 = await tph.safeMint(
            "0xb78D40C04a5e5176FA32260945939BB075C34696"
        )
        console.log(mint18)
        const mint19 = await tph.safeMint(
            "0xb78D40C04a5e5176FA32260945939BB075C34696"
        )
        console.log(mint19)
        const mint20 = await tph.safeMint(
            "0xb78D40C04a5e5176FA32260945939BB075C34696"
        )
        console.log(mint20)
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
