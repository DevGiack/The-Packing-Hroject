import React from "react"
import "./Conditions.css"
import { useEffect } from "react";

export const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className="bloc">
            <h1 id="TC">Terms and Conditions</h1>

            <p>
                Welcome to The Packing Hroject! By accessing or using our
                website, you agree to comply with and be bound by the following
                terms and conditions:
            </p>

            <h2>Use of Site:</h2>
            <p>
                You may use our site for lawful purposes only. You may not use
                our site in any way that violates any applicable laws or
                regulations, infringes upon the rights of others, or is harmful,
                threatening, or abusive.
            </p>

            <h2>Intellectual Property:</h2>
            <p>
                The content on our website, including text, graphics, logos,
                images, and software, is the property of The Packing Project and
                is protected by copyright and other intellectual property laws.
                You may not use, reproduce, or distribute any of our content
                without our express written permission.
            </p>

            <h2>Third-Party Links:</h2>
            <p>
                Our website may contain links to third-party websites that are
                not owned or operated by The Packing Project. We do not endorse
                or assume any responsibility for the content, privacy policies,
                or practices of any third-party websites. You access these sites
                at your own risk.
            </p>

            <h2>Disclaimer of Warranties:</h2>
            <p>
                Our website is provided on an "as is" and "as available" basis.
                We make no warranties or representations of any kind, whether
                express or implied, regarding the operation of our site, the
                information, content, materials, or products included on our
                site, or the functionality of our site. We disclaim all
                warranties, including but not limited to implied warranties of
                merchantability and fitness for a particular purpose.
            </p>

            <h2>Limitation of Liability:</h2>
            <p>
                The Packing Hroject shall not be liable for any damages of any
                kind arising from the use of our website, including but not
                limited to direct, indirect, incidental, punitive, and
                consequential damages. In no event shall our liability exceed
                the amount paid by you, if any, for accessing our site.
            </p>

            <h2>Indemnification:</h2>
            <p>
                You agree to indemnify and hold harmless The Packing Project,
                its officers, directors, employees, and agents from any and all
                claims, damages, losses, liabilities, and expenses (including
                attorneys' fees) arising from your use of our website or your
                violation of these terms and conditions.
            </p>

            <h2>Changes to Terms:</h2>
            <p>
                We reserve the right to modify these terms and conditions at any
                time without prior notice. By continuing to use our site after
                we post any such changes, you accept the modified terms and
                conditions.
            </p>

            <h2>Contact Us:</h2>
            <p>
                If you have any questions or concerns about our terms and
                conditions, please contact us at{" "}
                <a href="mailto:info@thepackingproject.com">
                    info@thepackingproject.com
                </a>
                .
            </p>
        </div>
    )
}
