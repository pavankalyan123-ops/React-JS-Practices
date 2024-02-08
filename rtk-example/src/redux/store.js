import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import UserSlice from './UserSlice'

export const store=configureStore({
    reducer:{
      counter:CounterSlice,
      data:UserSlice
    }
})