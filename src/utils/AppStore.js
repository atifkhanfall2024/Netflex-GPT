import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import MovieSlice from "./MoviesSlice"
import Trailerslice from "./Trailerslice"
import Gptslice from "./GPTslice"
import Langslice from "./LangSlice"
const AppStore = configureStore(
    {
        reducer:{
            // Define your slices here
            user : UserSlice ,
            movie : MovieSlice ,
            trailers:Trailerslice ,
            gpt:Gptslice ,
            Lan:Langslice

        }
    }
)

export default AppStore;