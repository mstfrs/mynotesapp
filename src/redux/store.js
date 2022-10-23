import { configureStore } from "@reduxjs/toolkit";
import  mynotesSlice  from "./notes/mynotesSlice";

export const store=configureStore({
    reducer:{
        mynotes:mynotesSlice,
    }
})