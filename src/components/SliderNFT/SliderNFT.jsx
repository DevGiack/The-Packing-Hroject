import { v1 as uuidv1 } from "uuid"
import NFT1 from "../../assets/images/mini_collection/TPH_01.webp"
import NFT2 from "../../assets/images/mini_collection/TPH_02.webp"
import NFT3 from "../../assets/images/mini_collection/TPH_03.webp"
import NFT4 from "../../assets/images/mini_collection/TPH_04.webp"
import NFT5 from "../../assets/images/mini_collection/TPH_05.webp"
import NFT6 from "../../assets/images/mini_collection/TPH_06.webp"
import NFT7 from "../../assets/images/mini_collection/TPH_07.webp"
import NFT8 from "../../assets/images/mini_collection/TPH_08.webp"
import NFT9 from "../../assets/images/mini_collection/TPH_09.webp"
import NFT10 from "../../assets/images/mini_collection/TPH_010.webp"
import NFT11 from "../../assets/images/mini_collection/TPH_011.webp"
import NFT12 from "../../assets/images/mini_collection/TPH_012.webp"
import NFT13 from "../../assets/images/mini_collection/TPH_013.webp"
import NFT14 from "../../assets/images/mini_collection/TPH_014.webp"
import NFT15 from "../../assets/images/mini_collection/TPH_015.webp"
import NFT16 from "../../assets/images/mini_collection/TPH_016.webp"
import NFT17 from "../../assets/images/mini_collection/TPH_017.webp"
import NFT18 from "../../assets/images/mini_collection/TPH_018.webp"
import NFT19 from "../../assets/images/mini_collection/TPH_019.webp"
import NFT20 from "../../assets/images/mini_collection/TPH_020.webp"
import NFT21 from "../../assets/images/mini_collection/TPH_021.webp"
import NFT22 from "../../assets/images/mini_collection/TPH_022.webp"
import NFT23 from "../../assets/images/mini_collection/TPH_023.webp"
import NFT24 from "../../assets/images/mini_collection/TPH_024.webp"
import NFT25 from "../../assets/images/mini_collection/TPH_025.webp"
import NFT26 from "../../assets/images/mini_collection/TPH_026.webp"
import NFT27 from "../../assets/images/mini_collection/TPH_027.webp"
import NFT28 from "../../assets/images/mini_collection/TPH_028.webp"
import NFT29 from "../../assets/images/mini_collection/TPH_029.webp"
import NFT30 from "../../assets/images/mini_collection/TPH_030.webp"
import NFT31 from "../../assets/images/mini_collection/TPH_031.webp"
import NFT32 from "../../assets/images/mini_collection/TPH_032.webp"
import NFT33 from "../../assets/images/mini_collection/TPH_033.webp"
import NFT34 from "../../assets/images/mini_collection/TPH_034.webp"
import NFT35 from "../../assets/images/mini_collection/TPH_035.webp"
import NFT36 from "../../assets/images/mini_collection/TPH_036.webp"
import NFT37 from "../../assets/images/mini_collection/TPH_037.webp"
import NFT38 from "../../assets/images/mini_collection/TPH_038.webp"
import NFT39 from "../../assets/images/mini_collection/TPH_039.webp"
import NFT40 from "../../assets/images/mini_collection/TPH_040.webp"
import NFT41 from "../../assets/images/mini_collection/TPH_041.webp"
import NFT42 from "../../assets/images/mini_collection/TPH_042.webp"
import NFT43 from "../../assets/images/mini_collection/TPH_043.webp"
import NFT44 from "../../assets/images/mini_collection/TPH_044.webp"
import NFT45 from "../../assets/images/mini_collection/TPH_045.webp"
import NFT46 from "../../assets/images/mini_collection/TPH_046.webp"
import NFT47 from "../../assets/images/mini_collection/TPH_047.webp"
import NFT48 from "../../assets/images/mini_collection/TPH_048.webp"
import NFT49 from "../../assets/images/mini_collection/TPH_049.webp"
import NFT50 from "../../assets/images/mini_collection/TPH_050.webp"
import "./SliderNFT.css"

export const SliderNFT = () => {

    const list = [
        null, NFT1, NFT2, NFT3, NFT4, NFT5, NFT6, NFT7, NFT8, NFT9, NFT10,
        NFT11, NFT12, NFT13, NFT14, NFT15, NFT16, NFT17, NFT18, NFT19, NFT20,
        NFT21, NFT22, NFT23, NFT24, NFT25, NFT26, NFT27, NFT28, NFT29, NFT30,
        NFT31, NFT32, NFT33, NFT34, NFT35, NFT36, NFT37, NFT38, NFT39, NFT40,
        NFT41, NFT42, NFT43, NFT44, NFT45, NFT46, NFT47, NFT48, NFT49, NFT50
    ]
    
    const imgTab = (slide, nameClass, start, end) => {
        for (let i = start; i <= end; i++) {
            const id = uuidv1()
            slide.push(
                <div key={id} className={nameClass}>
                    <img
                        src={list[i]}
                        height="200"
                        width="200"
                        alt={`NFT_${i}`}
                    />
                    ;
                </div>
            )
        }
    }

    let slideA = []
    let slideB = []
    let slideC = []

    imgTab(slideA, "slide-L", 1, 22)
    imgTab(slideB, "slide-R", 18, 39)
    imgTab(slideC, "slide-L", 35, 50)
    imgTab(slideC, "slide-L", 1, 6)

    slideB = slideB.reverse()

    return (
        <>
            <div className="slider-L">
                <div className="slide-track-L">{slideA}</div>
            </div>

            <div className="slider-R">
                <div className="slide-track-R">{slideB}</div>
            </div>

            <div className="slider-L">
                <div className="slide-track-L">{slideC}</div>
            </div>
        </>
    )
}
