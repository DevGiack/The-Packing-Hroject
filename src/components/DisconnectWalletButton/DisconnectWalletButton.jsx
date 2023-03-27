import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import { UserAddressAtom } from "../atom/UserWalletAddress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPowerOff } from "@fortawesome/free-solid-svg-icons"
import "./DisconnectWalletButton.css"

export const DisconnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom)
    const navigate = useNavigate()

    const handleDisconnectWallet = () => {
        sessionStorage.clear(); // Remove sessionStorage state
        setWalletAddress(undefined) // Update the global state
        navigate("/")
    }

    return (
        <FontAwesomeIcon
            icon={faPowerOff}
            color="rgb(196, 0, 0);"
            onClick={handleDisconnectWallet}
            className="disconnect"
        />
    )
}