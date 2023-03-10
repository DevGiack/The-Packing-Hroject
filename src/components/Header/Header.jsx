import "./Header.css"
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton"
import logo from "../../assets/images/LOGO-TPH.png"

export const Header = () => {

return (
    <div className="header-container">
        <img className="logo" src={logo} />
        <div className="header-content">
            <a className="link" href="#home">
                Home
            </a>
            <a className="link" href="#about">
                About
            </a>
            <a className="link" href="#roadmap">
                Roadmap
            </a>
            <a className="link" href="#team">
                Team
            </a>
            <a className="link" href="#faq">
                FAQ
            </a>
        </div>
        <div className="button-connect">
            <ConnectWalletButton />
        </div>
    </div>
)
}