import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import GPT from "./GPT";

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
        element:<Browse/>,
     
    }
])
 
   
  
    return(
        <div>
       
        <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body