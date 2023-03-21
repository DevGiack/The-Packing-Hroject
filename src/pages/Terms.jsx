import React, { useEffect } from "react"
import "./Conditions.css"

export const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <div className="bloc-title">
                <span id="big-title">TERMS & CONDITIONS</span>
                <span id="little-title">Terms & Conditions</span>
                <span id="title-border"></span>
            </div>
            <div className="bloc">
                <div className="paragraph">
                    Welcome to The Packing Hroject! By accessing or using our
                    website, you agree to comply with and be bound by the
                    following terms and conditions:
                </div>

                <h2>Use of Site:</h2>
                <div className="paragraph">
                    You may use our site for lawful purposes only. You may not
                    use our site in any way that violates any applicable laws or
                    regulations, infringes upon the rights of others, or is
                    harmful, threatening, or abusive.
                </div>

                <h2>Intellectual Property:</h2>
                <div className="paragraph">
                    The content on our website, including text, graphics, logos,
                    images, and software, is the property of The Packing Project
                    and is protected by copyright and other intellectual
                    property laws. You may not use, reproduce, or distribute any
                    of our content without our express written permission.
                </div>

                <h2>Third-Party Links:</h2>
                <div className="paragraph">
                    Our website may contain links to third-party websites that
                    are not owned or operated by The Packing Project. We do not
                    endorse or assume any responsibility for the content,
                    privacy policies, or practices of any third-party websites.
                    You access these sites at your own risk.
                </div>

                <h2>Disclaimer of Warranties:</h2>
                <div className="paragraph">
                    Our website is provided on an "as is" and "as available"
                    basis. We make no warranties or representations of any kind,
                    whether express or implied, regarding the operation of our
                    site, the information, content, materials, or products
                    included on our site, or the functionality of our site. We
                    disclaim all warranties, including but not limited to
                    implied warranties of merchantability and fitness for a
                    particular purpose.
                </div>

                <h2>Limitation of Liability:</h2>
                <div className="paragraph">
                    The Packing Hroject shall not be liable for any damages of
                    any kind arising from the use of our website, including but
                    not limited to direct, indirect, incidental, punitive, and
                    consequential damages. In no event shall our liability
                    exceed the amount paid by you, if any, for accessing our
                    site.
                </div>

                <h2>Indemnification:</h2>
                <div className="paragraph">
                    You agree to indemnify and hold harmless The Packing
                    Project, its officers, directors, employees, and agents from
                    any and all claims, damages, losses, liabilities, and
                    expenses (including attorneys' fees) arising from your use
                    of our website or your violation of these terms and
                    conditions.
                </div>

                <h2>Changes to Terms:</h2>
                <div className="paragraph">
                    We reserve the right to modify these terms and conditions at
                    any time without prior notice. By continuing to use our site
                    after we post any such changes, you accept the modified
                    terms and conditions.
                </div>

                <h2>Contact Us:</h2>
                <div className="paragraph">
                    If you have any questions or concerns about our terms and
                    conditions, please contact us at{" "}
                    <a href="mailto:info@thepackingproject.com">
                        info@thepackingproject.com
                    </a>
                    .
                </div>
            </div>
        </>
    )
}
