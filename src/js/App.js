import React  from "react"
import Header1 from './screens/Header1';
import '../styles/nike.css';
import Header2 from './screens/Header2';
import Top from "./screens/Top"
import Login from './screens/Login';
import Footer from './screens/footer/Footer';
import Signup from './screens/Singup';
import Resetpass from './screens/Resetpass';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 



const App = () => {
  const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false);
    // const [reset, setReset] = useState(true);
const resetpassword = () => {
        setLogin(false);
        setSignup(false)
  }
const loginfunction =() =>{
          setSignup(false)
          setLogin(true);
}
const signupfunction =() => {
  setLogin(false);
  setSignup(true)
}

 return (
          <Router>
            
            <div className="main">
                <div className="header">
                    <Header1 />
                    <Header2 />
                </div>
                <div className="body">
                  
                  <Top/>


                  <div className="allforms" >
                          
                          {(login ? (
                             <div className="form">
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
                                 <div className="forgetpassword">
                                   <Link onClick={() => resetpassword()}>Forget your Password</Link>
                                  </div>
                             </div>
                             <div className="byloggingin"><p>By Logging in , you are agree to Nike's privacy and
                                                             Terms of Use.
                                                         </p>
                             </div>
                             <div className="button"><button>SIGN IN</button></div>
                             <div className="notamember">
                                 Not a Member?
                                 <Link onClick={() => signupfunction()}>Register Account</Link>
                                      
                                 
                             </div>
                                 
                     </div>
                          ):((signup? (<div className="form">
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
                          <Link onClick={() => loginfunction()}>Login</Link>
                              
                          </div>
                              
                  </div>
                          
                          
                          
                          ): (
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
                                <Link onClick={() => loginfunction()}>Login</Link>
                                  </div>
                                      
                          </div>
                          )       )))}

                              {/* <div className="links">
                              <div className="links1">
                              <Link to="/">Login</Link>
                              </div>
                            
                              <div className="links1">
                              <Link to="/register">Register Account</Link>
                              </div>
                          
                              <div className="links1">
                              <Link to="/reset">Reset Password</Link>
                              </div>
                              </div> */}

                        </div>


                  {/* <Swapform title="login" /> */}

                </div>
                <div className="footer">
                  
                </div>
                  <Footer />
              </div>
            </Router>
 )};

 function Home() {
  return (
    <Login />
  );
}

function About() {
  return (
    <Signup />
  );
}

function Dashboard() {
  return (
    <Resetpass />
  );
}


export default App;
