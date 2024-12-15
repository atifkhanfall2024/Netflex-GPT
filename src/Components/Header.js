import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../utils/UserSlice";
import { auth } from "../utils/Firebase";
import { useEffect, useState} from "react";
import { Toggle_gpt } from "../utils/GPTslice";
import Supportlang from "../utils/SupportedLanguage";
import { Addlang } from "../utils/LangSlice";

const Header = ()=>{
  
   const dispatch  = useDispatch()
   const navigation = useNavigate()
   const [isuser , setisuser] = useState(false)
  
   // for support hook
  
   // use gpt slice for managing to show that if gpt is true then show me select options other wise donnot show

     const show = useSelector(store=>store.gpt?.Gpt_togggle)
   

  const handleclick = ()=>{

    signOut(auth).then(() => {

      // Sign-out successful.
      // remove all the information of user 
 
       dispatch(removeuser())

     
      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigation("/error")
    });

  }
  useEffect(()=>{
 const unsubscribe =    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid ,email , name} = user;
          dispatch(adduser({uid:uid , email:email, name:name}))
          setisuser(!isuser)
          navigation("/browse") ;
          // ...
        }
       
         else {
          // User is signed out
          dispatch(removeuser())
          navigation("/")
          // ...
        }

      });

      // this unsubscribe will work when we want to unmount from the useeffect or leave the page

      return() => unsubscribe()
 } ,[])

 // handle gpt 

  const Gpthandle = ()=>{

      dispatch(Toggle_gpt())
     

  }

  const HandleChange =(e)=>{
     
    dispatch(Addlang(e.target.value))
  }
    return(
      <>
    
  <div className="absolute z-50 w-screen px-8  bg-gradient-to-b  flex justify-between">
  
    <img className="w-40 " src="https://th.bing.com/th/id/R.a1f673e7df715f16dae49f4874009082?rik=1oW0xBGxcarNqw&pid=ImgRaw&r=0" alt ='logo'/>
   { !show && <select className="absolute top-[30%] left-[65%] bg-gray-400 p-2 rounded-lg text-white" onChange={HandleChange}>
      {Supportlang.map((lang)=> <option value={lang.identifier} key={lang.identifier}>{lang.name}</option> )}
    </select>}
    {isuser &&  <div className=" flex p-8 space-x-3">
    
    <button onClick={Gpthandle} className="text-white bg-purple-700 hover:bg-purple-400 mx-6 p-2 rounded-lg">{show ? "Gpt-Home" : "GPT-Search"}</button>
      <img className=" w-10 h-10 rounded-lg" alt =  "user"  src="https://th.bing.com/th/id/OIP.rAy3uM1TSf8ybSl-3GgnKgHaHa?rs=1&pid=ImgDetMain"/>
      < button className="text-white  z-10  bg-purple-700 p-2 rounded-lg " onClick={handleclick}>Sign out</button>
                         
   
    </div>
     }
      </div>
   
    </>
    )
}

export default Header;