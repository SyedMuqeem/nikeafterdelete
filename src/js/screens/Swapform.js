import React from "react"
import Resetpass from "./Resetpass"
import Signup from "./Singup"
import Form from "./Login"
import Login from "./Login"

const Swapform=(props) => {
        switch (props.forms){
            default:
                return <Login />
            case 'reset':
                return <Resetpass />
            case 'Join Us':
                return <Signup />
        }
}
export default Swapform;