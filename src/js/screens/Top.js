import React from "react"
import Menhover from "./hover/Menhover"
import Top1 from "./Top1"
import Top2 from "./Top2"
import Top3 from "./Top3"

const Top= () => (
    <div className="top">
        <Top1 />
        <Top2 />
        <Top3  />
    </div>
);
var menhover=document.getElementsByClassName("men");

export default Top;