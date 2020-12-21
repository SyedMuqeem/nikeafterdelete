import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";





const Resetpass = () => (
    <div className="form">
            <div className="nikeicon">
                <img src="nike.png"
                alt="pic"
                height="20px"></img>
            </div>
            <div className="yourAccountFor"><h1>RESET PASSWORD</h1></div>
            <div className="createyour">Enter your email to receive instructions on how to reset your password.</div>

            <div className="formEmail1">
                <input className="formEmail" type="text" placeholder="Email address"></input>
            </div>
           
            <div className="buttonReset"><button>RESET</button></div>
            <div className="notamember">Or return to 
           <Link to="/">Login</Link>
            </div>
                
    </div>
)

export default Resetpass;