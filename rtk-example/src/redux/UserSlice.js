import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:["pavan"]
}

export const UserSlice=createSlice({
    name:'users',
    initialState:initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action)=>{
             let index=action.payload.ind;
             state.users.splice(index,1)
        },
        updateUser:(state,action)=>{
            let index=action.payload.ind;
            let name=action.payload.name;
            state.users[index]=name;
        }
    }
})

export const{addUser,deleteUser,updateUser}=UserSlice.actions;
export default UserSlice.reducer;