import { createSlice } from "@reduxjs/toolkit";
import userInfo from '../../../users.json'

const initialState = {
    users : userInfo.users
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        getUsers : (state) =>{
            return state.users
        },
        createUsers : (state , action) =>{
            state.users.push(action.payload);
        }
    }
})

export const {createUsers} = userSlice.actions;
export default userSlice.reducer