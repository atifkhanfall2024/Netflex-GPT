import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"

const AppStore = configureStore(
    {
        reducer:{
            // Define your slices here
            user : UserSlice 

        }
    }
)

export default AppStore;