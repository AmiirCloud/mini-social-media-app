import { useState } from "react";
const Login = (props)=>{
    let [userName,setUserName] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault();
        props.setUser(userName)
    }
    const handleOnChange= (event)=>{
       setUserName( event.target.value)
    
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleOnChange}
             type="text" placeholder= "UserName"/>
            <input type="submit"/>
        </form>
        </>
    )
}
export default Login;