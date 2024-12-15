import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
    name:"lang" ,
    initialState:{
        config:"en"
    },
    reducers:{
        Addlang : (state ,action)=>{
            state.config = action.payload
        }
    }
})

export const {Addlang} = LangSlice.actions
export default LangSlice.reducer