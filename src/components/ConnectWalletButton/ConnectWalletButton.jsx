import "./ConnectWalletButton.css"
import { useEffect } from "react"
import { ethers } from "ethers"
import { useAtom } from "jotai"
import { UserAddressAtom } from "../atom/UserWalletAddress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { DisconnectWalletButton } from "../DisconnectWalletButton/DisconnectWalletButton"
import { Link } from "react-router-dom"

export const ConnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom)

    async function requestAccount() {
        // Checks if MetaMask is present in the browser
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                const address = accounts[0]
                sessionStorage.setItem("userAddress", address) // Store the address in the sessionStorage
                setWalletAddress(address) // Update the global state
            } catch (error) {}
        } else {
            alert("Meta Mask not detected")
        }
    }
    
    // Monitor account changes in MetaMask
    useEffect(() => {
        const address = sessionStorage.getItem("userAddress")
        if (address) {
            setWalletAddress(address)
        }
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                const address = accounts[0]
                sessionStorage.setItem("userAddress", address)
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

    // Show CONNECT WALLET button or user ETH address
    const buttonOrAddress = walletAddress ? (
        <div className="button-icons">
            <Link to="/profil">
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