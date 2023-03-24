import "./Faq.css"
import faq from "../../assets/images/FAQ.webp"

export const Faq = () => {
    return (
        <>
            <div className="bloc-title">
                <span id="big-title">QUESTIONS</span>
                <span id="little-title">Frequently Asked Questions</span>
                <span id="title-border"></span>
            </div>
            <div className="global-faq">
                <div className="bloc-faq">
                    <div className="blocA-faq">
                        <details>
                            <summary>What is The Packing Hroject NFT ?</summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT
                                veritatis !
                            </p>
                        </details>
                        <details>
                            <summary>How can i buy this NFT ?</summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT buy
                                method veritatis !
                            </p>
                        </details>
                        <details>
                            <summary>Where can i view my NFTs ?</summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT view
                                veritatis !
                            </p>
                        </details>
                        <details>
                            <summary>How we can buy and invest NFT ?</summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT invest
                                veritatis !
                            </p>
                        </details>
                        <details>
                            <summary>Where can i buy and sell NFTs ?</summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT buy and
                                selling veritatis !
                            </p>
                        </details>
                        <details>
                            <summary>
                                Where does my NFT go after i purchase ?
                            </summary>
                            <p>
                                Lupsus reveloum The Packing Hroject NFT purchase
                                veritatis !
                            </p>
                        </details>
                    </div>
                    <div className="blocB-faq">
                        <img alt="FAQ" src={faq} />
                    </div>
                </div>
            </div>
        </>
    )
}