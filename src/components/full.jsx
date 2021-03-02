import React from "react"
import ReactDOM from "react-dom"
import Heading from "./heading"
import SignIn from "./signin"
import SignUp from "./signup"
function Complete(props){
    return(
        <div className="container">
            <Heading heading="BITS Learning Management System" />
            <SignUp />
            <SignIn login={props.login} setLogin={props.setLogin} />
        </div>
    );
}
export default Complete;