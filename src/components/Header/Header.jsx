import "./Header.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton"
import logo from "../../assets/images/LOGO-TPH.png"

export const Header = () => {
    const [activeLink, setActiveLink] = useState(null)

    const handleClick = (event) => {
        setActiveLink(event.target.hash)
    }

    return (
        <div className="header-container">
            <Link to="/">
                <img className="logo" src={logo} />
            </Link>
            <div className="header-content">
                <a
                    className={`link ${activeLink === "#home" ? "active" : ""}`}
                    href="/#home"
                    onClick={handleClick}
                >
                    Home
                </a>
                <a
                    className={`link ${
                        activeLink === "#about" ? "active" : ""
                    }`}
                    href="/#about"
                    onClick={handleClick}
                >
                    About
                </a>
                <a
                    className={`link ${activeLink === "#show" ? "active" : ""}`}
                    href="/#show"
                    onClick={handleClick}
                >
                    Collection
                </a>
                <a
                    className={`link ${activeLink === "#team" ? "active" : ""}`}
                    href="/#team"
                    onClick={handleClick}
                >
                    Team
                </a>
                <a
                    className={`link ${activeLink === "#faq" ? "active" : ""}`}
                    href="/#faq"
                    onClick={handleClick}
                >
                    FAQ
                </a>
            </div>
            <div className="button-connect">
                <ConnectWalletButton />
            </div>
        </div>
    )
}
