import React from "react"
import Kidshover from "./hover/Kidshover"
import Menhover from "./hover/Menhover"
import Womenhover from "./hover/Womenhover"

const Top2 =() => {

    return(
    <div className="top2">
        <div className="men">Men
            <div className="hovereff">
                <Menhover/>
                </div>
        </div>
        <div className="men">Women
        <div className="hovereff">
                <Womenhover/>
                </div>
        </div>
        <div className="men">Kids
        <div className="hovereff">
                <Kidshover/>
                </div>
        </div>
        <div className="men">Customise
        <div className="hovereff">
                <Womenhover/>
                </div>
        </div>
        <div className="men">Sale
        <div className="hovereff">
                <Menhover/>
                </div>
        </div>
        <div className="men">SNKRS</div>
        
    </div>
)};

export default Top2;