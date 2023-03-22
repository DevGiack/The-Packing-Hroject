import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import "./DisconnectWalletButton.css"
import { UserAddressAtom } from "../atom/UserWalletAddress"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPowerOff } from "@fortawesome/free-solid-svg-icons"

export const DisconnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom)
    const navigate = useNavigate()

    const handleDisconnectWallet = () => {
        localStorage.removeItem("userAddress") // Supprime l'etat du localStorage
        setWalletAddress(undefined) // Met à jour le state global
        navigate("/") // Redirige vers la page d'accueil
    }

    setInterval(function() {
        localStorage.clear("userAddress");
        setWalletAddress(undefined) // Met à jour le state global
        navigate("/");
      }, 3600000); // Efface le Local Storage, redirige vers la page d'accueil toutes les 3 heures
      


    return (
        <FontAwesomeIcon
            icon={faPowerOff}
            color="rgb(196, 0, 0);"
            onClick={handleDisconnectWallet}
            className="disconnect"
        />
    )
}
