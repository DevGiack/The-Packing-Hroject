import "./ConnectWalletButton.css";
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Cookies from "js-cookie";

const ConnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useState("");

    async function requestAccount() {
        console.log("Requesting account...");

        // ❌ Vérifie si Meta Mask est présent dans le navigateur
        if (window.ethereum) {
            console.log("detected");

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const address = accounts[0];
                setWalletAddress(address);
                Cookies.set("walletAddress", address, { expires: 7 }); // Stocker l'adresse dans un cookie
            } catch (error) {
                console.log("Error connecting...");
            }
        } else {
            alert("Meta Mask not detected");
        }
    }

    // Create a provider to interact with a smart contract
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }

    // Afficher le bouton CONNECT WALLET ou l'adresse ETH de l'utilisateur
    const buttonOrAddress = walletAddress ? (
        <button className="address-button">
            {`${walletAddress.slice(0, 6)}....${walletAddress.slice(-4)}`}
        </button>
    ) : (
        <button className="connect-wallet-button" onClick={requestAccount}>
            CONNECT WALLET
        </button>
    );

    useEffect(() => {
        const storedAddress = Cookies.get("walletAddress");
        if (storedAddress && storedAddress !== walletAddress) {
            setWalletAddress(storedAddress);
        }
    }, []); // Récupérer la valeur du cookie à chaque chargement de page

    return (
        <div className="App">
            <header className="App-header">{buttonOrAddress}</header>
        </div>
    );
};

export default ConnectWalletButton;
