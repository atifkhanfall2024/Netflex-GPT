import { useState } from "react"

const SignIn = ()=>{

    // usage of use state to set that when i clicked on toggle then the sign in text change to sign up

    const[IsSignin , setIsSignin] = useState(true)

    const toggleForm = ()=>{

        // if i write here false instead of !Issignin then when i click on sign in then the sign in text change to sign but when i click on sign in they cannot be changed

        // but

        // if i write !Issignin then when i click on sign in then the sign in text change and also give back the signin form when needed

      setIsSignin(!IsSignin)
    }

    return(
        
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded w-1/4 p-5 px-10">
       
            <form className="flex flex-col" >
            <p className="text-2xl my-7 mx-4 text-white px-5">{IsSignin?"Sign In":"Sign up"}</p>
            {!IsSignin&&<input className="p-2  m-2 bg-gray-700 text-white" type="text" placeholder="Enter Full name"/>}
            <input className="p-2  m-2 bg-gray-700 text-white" type="text" placeholder="Enter your mail"/>
            <input className="p-2 m-2 bg-gray-700 text-white" type="password" placeholder="Enter password"/>
            <button className="text-white p-3 my-4 bg-red-500">{IsSignin?"Sign In":"Sign up"}</button>
       
            </form>
            <div className="flex justify-between">
         <span className="flex text-gray-400">  <input className=" w-6 h-4" type="checkbox"/><h6 style={{margin:"-5px", paddingLeft:"5px", fontSize:"15px"}} className="text-white text-gray-400"> Remember me</h6></span>
                <p className="text-white mx-2 text-gray-400" style={{margin:"-5px", fontSize:"15px"}}>Need Help</p>
            </div>
            <div className="p-3 py-10">
                <span className="text-white flex space-x-2"><p className="text-gray-400">{IsSignin?"New to Netflex?" :"Already Account ?"}</p> <a href="#signup" onClick={toggleForm}> {IsSignin ? "Sign up now" :"Sign in"}</a></span>
                <p className="text-white my-5 text-gray-400" style={{fontSize:"12px"}}>This page is protacted by Google raCAPTCHA to ensure you are not a robot <a className="text-blue-300" href="#home">Learn more</a></p>
            </div>
        </div>
    )
}
export default SignIn