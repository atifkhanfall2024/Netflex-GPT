import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({

    name:"movieslice",
    initialState:{
        Movies : null,
        Popular:null ,
        Trending:null
    },

    reducers:{
        Addmovies : (state ,action)=>{
            state.Movies = action.payload
        } ,
        Pop :(state ,action)=>{
            state.Popular = action.payload
        } ,
        Trending :(state ,action)=>{
            state.Trending = action.payload
        } ,
        
    }
})


export const{Addmovies , Pop ,Trending} = MoviesSlice.actions
export default MoviesSlice.reducer