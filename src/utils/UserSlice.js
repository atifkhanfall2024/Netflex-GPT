import { createSlice } from "@reduxjs/toolkit";


const UserSlice  = createSlice({
    name:"user",
    initialState:null ,

    reducers:{
        adduser :(state , action)=>{
           return action.payload
        },
        removeuser:(state , action)=>{
            return null ;
        }
    }
})

// export slices

export const{adduser, removeuser} = UserSlice.actions ;

// export reducers mean overall file 

    export default UserSlice.reducer