import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const Body = ()=>{

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

    return(
        <div>
       
        <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body