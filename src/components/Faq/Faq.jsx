import "./Faq.css"

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
            <div className="questions"><span>What is The Packing Hroject NFT ?</span>
            <span className="responses">Lupsus reveloum veritas about the packing hroject mother fucker</span></div>
            <div className="questions"><span>How can i buy this NFT ?</span></div>
            <div className="questions"><span>Where can i view my NFTs ?</span></div>
            <div className="questions"><span>How we can buy and invest NFT ?</span></div>
            <div className="questions"><span>Where can i buy and sell NFTs ?</span></div>
            <div className="questions"><span>Where does my NFT go after i purchase ?</span></div>
          </div>
          <div className="blocB-faq">
            <img src="../src/assets/images/FAQ.png" alt="pack2_NFT" />
          </div> 
        </div>
      </div>
    </>
  )
}