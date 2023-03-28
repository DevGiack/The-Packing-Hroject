require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MUMBAI_ACCOUNTS = [process.env.MUMBAI_ACCOUNT];
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const POLYGON_ACCOUNTS = [process.env.POLYGON_ACCOUNT];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: MUMBAI_ACCOUNTS,
      chainId: 80001,
    },
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: POLYGON_ACCOUNTS,
      chainId: 137,
    }
  }
};
