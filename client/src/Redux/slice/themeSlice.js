import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBlack : false
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers: {
        toggleTheme : (state) =>{
            state.isBlack  = !state.isBlack;
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer