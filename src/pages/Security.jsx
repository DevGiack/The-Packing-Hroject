import React from "react"
import "./Conditions.css"
import { useEffect } from "react"

export const Security = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className="bloc-title">
                <span id="big-title">SECURITY</span>
                <span id="little-title">Security</span>
                <span id="title-border"></span>
            </div>
            <div className="bloc">
                <div className="paragraph">
                    At The Packing Hroject, we take the security of our users
                    very seriously. We have implemented the following measures
                    to ensure that our site is as secure as possible:
                </div>

                <h2>Encryption:</h2>
                <div className="paragraph">
                    All communication between our servers and your device is
                    encrypted using SSL (Secure Sockets Layer) technology. This
                    ensures that any information you transmit to us, such as
                    your login credentials, is protected from interception by
                    third parties.
                </div>

                <h2>Password Requirements:</h2>
                <div className="paragraph">
                    We require that all users choose a strong password when
                    creating an account with us. This includes a minimum of 8
                    characters, a mix of upper and lowercase letters, and at
                    least one number and special character.
                </div>

                <h2>Two-Factor Authentication:</h2>
                <div className="paragraph">
                    We offer two-factor authentication as an optional extra
                    layer of security for our users. This requires users to
                    enter a unique code, generated by an authenticator app, in
                    addition to their password when logging in.
                </div>

                <h2>Regular Security Audits:</h2>
                <div className="paragraph">
                    We regularly conduct security audits of our site and
                    infrastructure to identify and address potential
                    vulnerabilities before they can be exploited.
                </div>

                <h2>Third-Party Security:</h2>
                <div className="paragraph">
                    We use third-party security services to monitor our site and
                    servers for any potential security threats. This includes
                    24/7 monitoring and immediate response to any potential
                    security incidents.
                </div>

                <h2>Report Security Issues:</h2>
                <div className="paragraph">
                    If you believe you have identified a security vulnerability
                    on our site or servers, please report it to us immediately
                    at{" "}
                    <a href="mailto:security@thepackinghroject.com">
                        security@thepackinghroject.com
                    </a>
                    .
                </div>
            </div>
        </>
    )
}
