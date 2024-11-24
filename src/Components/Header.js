import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeuser } from "../utils/UserSlice";

const auth = getAuth();
const Header = ()=>{
  
   const dispatch  = useDispatch()
   const navigation = useNavigate()
  const handleclick = ()=>{

    signOut(auth).then(() => {

      // Sign-out successful.
      // remove all the information of user 
 
       dispatch(removeuser())

      navigation("/")
      
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigation("/error")
    });

  }
    return(
      <>
    
  <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
    <img className="w-40 " src="https://th.bing.com/th/id/R.a1f673e7df715f16dae49f4874009082?rik=1oW0xBGxcarNqw&pid=ImgRaw&r=0" alt ='logo'/>
    <div className=" flex p-8 space-x-3">
      <img className=" w-10 h-10" alt =  "user"  src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"/>
      <button className="text-white " onClick={handleclick}>Sign out</button>
   
    </div>
      </div>
   
    </>
    )
}

export default Header;