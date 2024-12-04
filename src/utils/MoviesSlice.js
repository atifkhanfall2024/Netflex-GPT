import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({

    name:"movieslice",
    initialState:{
        Movies : null
    },

    reducers:{
        Addmovies : (state ,action)=>{
            state.Movies = action.payload
        }
    }
})


export const{Addmovies} = MoviesSlice.actions
export default MoviesSlice.reducer