import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Signup = () => (
    <div className="form">
            <div className="nikeicon">
                <img src="nike.png"
                alt="pic"
                height="20px"></img>
            </div>
            <div className="yourAccountFor"><h1>BECOME A NIKE MEMBER</h1></div>
            <div className="createyour">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>

            <div className="formEmail1">
                <input className="formEmail" type="text" placeholder="Email address"></input>
                <input className="formEmail" type="text" placeholder="Password"></input>
                <input className="formEmail" type="text" placeholder="First Name"></input>
                <input className="formEmail" type="text" placeholder="Last Name"></input>
                <input className="formEmail" type="text" placeholder="Date OF Birth"></input>
                <div className="nikereward">Get a Nike Member Reward every year on your Birthday.</div>
                <input className="formEmail" type="text" placeholder="India"></input>
                <div className="gender">
                    <button className="male">Male</button>
                    <button className="female">Female</button>
                </div>
            </div>
            <div className="checkBoxRow">
                <input className="checkbox" type="checkbox"/>
                <div className="signupfor">Sign up for emails to get updates from Nike on products, offers and your Member benefits</div>
            </div>
            <div className="byloggingin"><p>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.
                                        </p>
            </div>
            <div className="button"><button>JOIN US</button></div>
            <div className="notamember">Already a Member?
            <Link to="/">Login</Link>
                
            </div>
                
    </div>
)

export default Signup;