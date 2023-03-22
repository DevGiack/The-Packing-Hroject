import { v1 as uuidv1 } from "uuid"
import "./Collection.css"
import { getRandomizedArray, getList, getTooltipList } from "../../utils/utils.js"

const list = await getList()
let attributes = await getTooltipList()

export const Collection =() => {

  const getTooltipContent = (index) => {
    console.log(index)
    let toolTip = attributes[index].map((x) => {
      const id = uuidv1()
      console.log("attribut: " + x.traitName+ ",value: " + x.traitValue + ",percent: " + x.traitPercent + ",color: " + x.traitColor)
      return (
        <div key={id}>
          <span className="attribut">{x.traitName} : &nbsp; </span>
          <span className="value">{x.traitValue}&nbsp; &nbsp;</span>
          <span className={x.traitColor}>{x.traitPercent}</span>
          <span className="pourcent"> %</span>
          <br />
        </div>
      )
    })
    return toolTip
  }

  const imgTab = (slide, nameClass, start, end) => {

    for (let i = start; i < end; i++) {
      const rid = getRandomizedArray()[i - 1]
      const img = list[rid];
      const id = uuidv1();
  
      slide.push(
        <div key={id} className={nameClass}>
          <img src={img} height="200" width="200" alt={`NFT_${i}`} />
          <span className="tooltiptext">
            {getTooltipContent(rid)}
          </span>
        </div>
      );
    }
  }

  let slideA = []
  let slideB = []
  let slideC = []
  let slideD = []
  let slideE = []
  let slideF = []
  let slideG = []
  let slideH = []
  let slideI = []
  let slideJ = []

  imgTab(slideA, "slideL tooltip", 1, 5)
  imgTab(slideB, "slideR tooltip", 6, 10)
  imgTab(slideC, "slideL tooltip", 11, 15)
  imgTab(slideD, "slideR tooltip", 16, 20)
  imgTab(slideE, "slideL tooltip", 21, 25)
  imgTab(slideF, "slideR tooltip", 26, 30)
  imgTab(slideG, "slideL tooltip", 31, 35)
  imgTab(slideH, "slideR tooltip", 36, 40)
  imgTab(slideI, "slideL tooltip", 41, 45)
  imgTab(slideJ, "slideR tooltip", 46, 50)

  slideB = slideB.reverse()
  slideD = slideD.reverse()
  slideF = slideF.reverse()
  slideH = slideH.reverse()
  slideJ = slideJ.reverse()

  return (
    <>
      {[slideA, slideB, slideC, slideD, slideE, slideF, slideG, slideH, slideI, slideJ].map((slide, index) => (
        <div key={index} className={`slider${index % 2 === 0 ? 'L' : 'R'}`}>
          <div className={`slidetrack${index % 2 === 0 ? 'L' : 'R'}`}>{slide}</div>
        </div>
      ))}
    </>
  );
}