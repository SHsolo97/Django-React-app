import React,{useState} from "react"

function SignIn(props){
    const [user,setUser]= useState({
      email:"",
      password:""
    });
    function handleClick(event){
      event.preventDefault();
      var email=document.querySelector("#email").value;
      var password=document.querySelector("#password").value;
      if(email=="admin@gmail.com" && password=="password")
        return (props.setLogin(!props.login));
    }
    return(
        <div className="login">
        <h2>Log in</h2>
        <form className="login" method="post">
          <input type="text" id="email" name="email" placeholder="E mail" />
          <input type="password" id="password" name="password" placeholder="Password" />
          <input type="submit" onClick={handleClick}  value="Log In" />
        </form>
      </div>
    );
}
export default SignIn;