import { useState } from "react"
import React  from "react"
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

const Top3=()=>{
    const [open,  setOpen] = useState(false);
    return(
    <div className="top3" onClick={()=> setOpen(!open)}>
        <div className="likeicon1"></div>
        <div className="searchbar">
                <div className="searchicon"><i class="fas fa-search"></i></div>
                <div className="searchtext"> <input className="textbox" type="text" placeholder="Search" ></input></div>
        </div>
        {/* <link to="/search">hiii</link> */}
        <div className="likeicon"><i class="far fa-heart"></i></div>
        <div className="likeicon"><i class="fas fa-briefcase"></i></div>

    </div>

)};
export default Top3;