import { createSlice } from "@reduxjs/toolkit";



const Tralierslice = createSlice({
    name:"trailer" ,
    initialState:{
        trailerss:null
    },

    reducers:{
        Addtrailer:(state , action)=>{
            state.trailerss = action.payload
        }
    }
})
export const{Addtrailer} = Tralierslice.actions
export default Tralierslice.reducer