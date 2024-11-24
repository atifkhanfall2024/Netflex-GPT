import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser ,removeuser } from "../utils/UserSlice";

const auth = getAuth();
const Body = ()=>{
 
     // tp push user data into store 

     const dispatch = useDispatch()

  // set the path or route for login and broiwse
    const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
])
 
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid ,email , name} = user.uid;
              dispatch(adduser({uid:uid , email:email, name:name}))
              // ...
            } else {
              // User is signed out
              dispatch(removeuser())
              // ...
            }
          });
     } ,[])
  
    return(
        <div>
       
        <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body