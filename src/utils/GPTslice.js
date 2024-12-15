import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name:"gpt" ,
    initialState:{
        Gpt_togggle : false
    },
    reducers:{
        Toggle_gpt :(state)=>{
            state.Gpt_togggle  = !state.Gpt_togggle
        }
    }
})

 export const {Toggle_gpt} = GPTslice.actions
 export default GPTslice.reducer
