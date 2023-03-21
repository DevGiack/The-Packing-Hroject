import "./ConnectWalletButton.css"
import { useEffect } from "react"
import { ethers } from "ethers"
import { useAtom } from "jotai"
import { UserAddressAtom } from "../atom/UserWalletAddress"
import CryptoJS from "crypto-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { DisconnectWalletButton } from "../DisconnectWalletButton/DisconnectWalletButton"
import { Link } from "react-router-dom"

const ConnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom)

    // La clé de chiffrement
    const secretKey = "secret-key"

    // Chiffre les données avant de les stocker dans le localStorage
    function setLocalStorageItem(key, value) {
        const ciphertext = CryptoJS.AES.encrypt(value, secretKey).toString()
        localStorage.setItem(key, ciphertext)
    }

    // Déchiffre les données stockées dans le localStorage
    function getLocalStorageItem(key) {
        const ciphertext = localStorage.getItem(key)
        if (ciphertext) {
            const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey)
            const plaintext = bytes.toString(CryptoJS.enc.Utf8)
            return plaintext
        }
        return null
    }

    async function requestAccount() {
        // ❌ Vérifie si MetaMask est présent dans le navigateur
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                const address = accounts[0]
                setLocalStorageItem("userAddress", address) // Stocke l'adresse dans le localStorage
                setWalletAddress(address) // Mets à jour le state global
            } catch (error) {}
        } else {
            alert("Meta Mask not detected")
        }
    }

    useEffect(() => {
        const address = getLocalStorageItem("userAddress")
        if (address) {
            setWalletAddress(address)
        }

        // Surveiller les changements de compte dans MetaMask
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                const address = accounts[0]
                setLocalStorageItem("userAddress", address)
                setWalletAddress(address)
            })
        }
    }, [setWalletAddress])

    // Create a provider to interact with a smart contract
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()

            const provider = new ethers.providers.Web3Provider(window.ethereum)
        }
    }

    // Afficher le bouton CONNECT WALLET ou l'adresse ETH de l'utilisateur
    const buttonOrAddress = walletAddress ? (
        <div className="button-icons">
            <Link to="/profil/#OwnCollection">
                <FontAwesomeIcon
                    icon={faUser}
                    color="rgb(224, 224, 224)"
                    id="user"
                />
            </Link>
            <Link to="/profil">
                <button className="address-button">
                    {`${walletAddress.slice(0, 6)}....${walletAddress.slice(-4)}`}
                </button>
            </Link>
            <DisconnectWalletButton />
        </div>
    ) : (
        <button className="connect-wallet-button" onClick={requestAccount}>
            CONNECT WALLET
        </button>
    )

    return (
        <div className="App">
            <header className="App-header">{buttonOrAddress}</header>
        </div>
    )
}

export default ConnectWalletButton
