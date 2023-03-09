import { useAtom } from "jotai";
import { useNavigate } from 'react-router-dom';
import "./DisconnectWalletButton.css";
import { UserAddressAtom } from "../atom/UserWalletAddress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const DisconnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom);
    const navigate = useNavigate();


    const handleDisconnectWallet = () => {
        localStorage.removeItem("userAddress"); // Supprime l'adresse du localStorage
        setWalletAddress(undefined); // Met à jour le state global
        navigate('/'); // Redirige vers la page d'accueil
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
