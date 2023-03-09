import { useAtom } from "jotai";
import "./DisconnectWalletButton.css";
import { UserAddressAtom } from "../atom/UserWalletAddress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const DisconnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom);

    const handleDisconnectWallet = () => {
        localStorage.removeItem("userAddress"); // Supprime l'adresse du localStorage
        setWalletAddress(undefined); // Met à jour le state global
    };

    return (
        <FontAwesomeIcon
            icon={faPowerOff}
            color="#e53170"
            onClick={handleDisconnectWallet}
            className="disconnect"
        />
    );
};

export default DisconnectWalletButton;
