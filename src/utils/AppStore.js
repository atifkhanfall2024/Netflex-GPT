import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import MovieSlice from "./MoviesSlice"

const AppStore = configureStore(
    {
        reducer:{
            // Define your slices here
            user : UserSlice ,
            movie : MovieSlice

        }
    }
)

export default AppStore;