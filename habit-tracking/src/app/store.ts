import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './habitSlice.ts'


export default configureStore({
    reducer:{
        habits: habitReducer
    }
})