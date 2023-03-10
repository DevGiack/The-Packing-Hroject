import "./Header.css"
import { useState, useEffect } from "react"
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton"
import logo from "../../assets/images/LOGO-TPH.png"

export const Header = () => {
    const [activeLink, setActiveLink] = useState("home")

    function handleLinkClick(linkId) {
        setActiveLink(linkId)

        function handleScroll() {
            const sections = ["home", "about", "roadmap", "team", "faq"]
            const currentScrollPos = window.pageYOffset

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i])
                const { top, bottom } = element.getBoundingClientRect()

                if (currentScrollPos >= top && currentScrollPos < bottom) {
                    setActiveLink(sections[i])
                    break
                }
            }
        }

        useEffect(() => {
            window.addEventListener("scroll", handleScroll)
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, [])
    }
    return (
        <div className="header-container">
            <img className="logo" src={logo} />
            <div className="header-content">
                <a
                    className={`link ${activeLink === "home" ? "active" : ""}`}
                    href="#home"
                    onClick={() => handleLinkClick("home")}
                >
                    Home
                </a>
                <a
                    className={`link ${activeLink === "about" ? "active" : ""}`}
                    href="#about"
                    onClick={() => handleLinkClick("about")}
                >
                    About
                </a>
                <a
                    className={`link ${
                        activeLink === "roadmap" ? "active" : ""
                    }`}
                    href="#roadmap"
                    onClick={() => handleLinkClick("roadmap")}
                >
                    Roadmap
                </a>
                <a
                    className={`link ${activeLink === "team" ? "active" : ""}`}
                    href="#team"
                    onClick={() => handleLinkClick("team")}
                >
                    Team
                </a>
                <a
                    className={`link ${activeLink === "faq" ? "active" : ""}`}
                    href="#faq"
                    onClick={() => handleLinkClick("faq")}
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
