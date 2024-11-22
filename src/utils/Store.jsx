import {configureStore} from "@reduxjs/toolkit";
import Bookreducer from "./BookSlice"
const appStore=configureStore({
    reducer:{
        Book:Bookreducer,
    },
});
export default appStore;