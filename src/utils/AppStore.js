import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import MovieSlice from "./MoviesSlice"
import Trailerslice from "./Trailerslice"

const AppStore = configureStore(
    {
        reducer:{
            // Define your slices here
            user : UserSlice ,
            movie : MovieSlice ,
            trailers:Trailerslice ,

        }
    }
)

export default AppStore;