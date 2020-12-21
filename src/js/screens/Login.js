import React,{useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Signup from "./Singup";

const login = () => {

  return  <div className="form">
            <div className="nikeicon">
                <img src="nike.png"
                alt="pic"
                height="20px"></img>
            </div>
            <div className="yourAccountFor"><h1>YOUR ACCOUNT FOR EVERYTHING NIKE</h1></div>

            <div className="formEmail1">
                <input className="formEmail" type="text" placeholder="Email address"></input>
                <input className="formEmail" type="text" placeholder="Password"></input>
            </div>
            <div className="checkBoxRow">
                <input className="checkbox" type="checkbox"/>
                <label for="checkboxword"> Keep me signed in</label><br></br>
                <div className="forgetempty"></div>
                <div className="forgetpassword"><Link to="/reset">Forget your Password</Link></div>
            </div>
            <div className="byloggingin"><p>By Logging in , you are agree to Nike's privacy and
                                            Terms of Use.
                                        </p>
            </div>
            <div className="button"><button>SIGN IN</button></div>
            <div className="notamember">
                Not a Member?
                <Link to="/register">Register Account</Link>
                     
                
            </div>
                
    </div>
}

export default login    ;