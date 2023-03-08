import "./Header.css";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import logo from "../../assets/images/LOGO-TPH.png";

const Header = () => {
    return (
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
            </div>
        </div>
    );
};

export default Header;
