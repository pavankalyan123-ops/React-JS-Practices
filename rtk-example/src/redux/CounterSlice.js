import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
}

export const CounterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{
            state.count=0;
        },
        incrementByValue:(state,action)=>{
            state.count+=action.payload;
        }
    }
})

export const {increment,decrement,reset,incrementByValue}=CounterSlice.actions;
export default CounterSlice.reducer;