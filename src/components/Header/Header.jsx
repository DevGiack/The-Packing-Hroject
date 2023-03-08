import './Header.css';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';
import DisconnectWalletButton from '../DisconnectWalletButton/DisconnectWalletButton'

import { UserAddressAtom } from '../atom/UserWalletAddress'
import { useAtom } from 'jotai';

const Header = () => {

    const [userAddress] = useAtom(UserAddressAtom);

    return (
        <div className="main-header">
        <div className='connect'>
        
import "./Header.css";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import logo from "../../assets/images/LOGO-TPH.png";

const Header = () => (
    <div className="header-container">
            <img className="logo" src={logo} />
        <div className="header-content">
            <h3 className="link">Home</h3>
            <h3 className="link">About</h3>
            <h3 className="link">Roadmap</h3>
            <h3 className="link">Team</h3>
            <h3 className="link">FAQ</h3>
        </div>
        <div className="button-connect">

            <ConnectWalletButton />
            <DisconnectWalletButton/>
            <p style={{ color: 'white' }}>{userAddress}</p>
        </div>
    </div>
    );
};

export default Header;
