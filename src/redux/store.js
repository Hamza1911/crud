import {configureStore} from "@reduxjs/toolkit"
import userDetail from "./UserSlice"
export const store =configureStore({
    reducer:{
        app:userDetail,
    }
 })