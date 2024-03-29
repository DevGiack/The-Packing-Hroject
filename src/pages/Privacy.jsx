import { useEffect } from "react"
import "./Conditions.css"

export const Privacy = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className="bloc-title">
                <span id="big-title">PRIVACY</span>
                <span id="little-title">Privacy</span>
                <span id="title-border"></span>
            </div>
            <div className="bloc">
                <div className="paragraph">
                    At The Packing hroject, we understand the importance of
                    privacy and are committed to protecting the personal
                    information of our users. This Privacy Policy outlines the
                    types of information we may collect from you, how we may use
                    that information, and the measures we take to ensure its
                    security.
                </div>

                <h2>Information Collection:</h2>
                <div className="paragraph">
                    When you use our website, we may collect personal
                    information such as your name, email address, and other
                    contact details. Additionally, we may collect non-personal
                    information such as your IP address and browsing data. We
                    may also use cookies and other tracking technologies to
                    gather information about your activity on our site.
                </div>

                <h2>Information Use:</h2>
                <div className="paragraph">
                    We use the information we collect for various purposes,
                    including to improve our website, provide customer support,
                    and offer personalized content and advertisements. We may
                    also use your information to communicate with you about our
                    products and services, promotions, and other news.
                </div>

                <h2>Information Sharing:</h2>
                <div className="paragraph">
                    We do not sell or rent your personal information to third
                    parties for their marketing purposes. However, we may share
                    your information with service providers who assist us with
                    our business operations, such as payment processors and
                    shipping companies. We may also disclose your information if
                    required by law or to protect our legal rights.
                </div>

                <h2>Data Security:</h2>
                <div className="paragraph">
                    We take appropriate measures to protect your personal
                    information from unauthorized access, disclosure,
                    alteration, and destruction. However, please be aware that
                    no security measures are foolproof, and we cannot guarantee
                    the absolute security of your data.
                </div>

                <h2>Changes to this Policy:</h2>
                <div className="paragraph">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or applicable laws. We
                    encourage you to review this page periodically for any
                    updates.
                </div>

                <h2>Contact Us:</h2>
                <div className="paragraph">
                    If you have any questions or concerns about our Privacy
                    Policy, please contact us at{" "}
                    <a href="mailto:info@thepackinghroject.com">
                        info@thepackinghroject.com
                    </a>
                    .
                </div>
            </div>
        </>
    )
}
