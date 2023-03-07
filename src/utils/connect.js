import { ethers } from 'ethers';

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            console.log("Account:", await signer.getAddress());
            } catch (e) { console.log(e);}
            } else {
            console.log("false");
            }
    }

export default connect;

