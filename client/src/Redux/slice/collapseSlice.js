import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

export const collapseSlice = createSlice({
    name : "sidebar",
    initialState,
    reducers : {
        openSlice : (state) =>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {openSlice} = collapseSlice.actions;
export default collapseSlice.reducer