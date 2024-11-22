import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import books from "./Books";
const BookSlice=createSlice({
    name:"Book",
    initialState:{
        items:books,
    },
    reducers:{
        addbook:(state,action)=>{
            state.items.push(action.payload);
            
        }
    }
});
export const {addbook} =BookSlice.actions;
export default BookSlice.reducer;