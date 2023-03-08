import { useAtom } from 'jotai';
import { UserAddressAtom } from '../atom/UserWalletAddress'

const DisconnectWalletButton = () => {

    const [walletAddress, setWalletAddress] = useAtom(UserAddressAtom);

    const handleDisconnectWallet = () => {
        localStorage.removeItem("userAddress"); // Supprime l'adresse du localStorage
        setWalletAddress(undefined); // Met à jour le state global
      };

      console.log('############################')
      console.log(walletAddress)
      


    return (
        <button onClick={handleDisconnectWallet}>DisconnectWalletButton</button>
    )
}

export default DisconnectWalletButton;