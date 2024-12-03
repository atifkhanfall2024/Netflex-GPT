import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../utils/UserSlice";
import { auth } from "../utils/Firebase";
import { useEffect} from "react";


const Header = ()=>{
  
   const dispatch  = useDispatch()
   const navigation = useNavigate()

  

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
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid ,email , name} = user;
          dispatch(adduser({uid:uid , email:email, name:name}))
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
 } ,[])
    return(
      <>
    
  <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
    <img className="w-40 " src="https://th.bing.com/th/id/R.a1f673e7df715f16dae49f4874009082?rik=1oW0xBGxcarNqw&pid=ImgRaw&r=0" alt ='logo'/>
    <div className=" flex p-8 space-x-3">
      <img className=" w-10 h-10" alt =  "user"  src="https://th.bing.com/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?rs=1&pid=ImgDetMain"/>
      <button className="text-white " onClick={handleclick}>Sign out</button>
   
    </div>
      </div>
   
    </>
    )
}

export default Header;