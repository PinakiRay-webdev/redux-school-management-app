import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvents = createAsyncThunk("getEvents" , async()=>{
    const eventData = await axios.get('http://localhost:3001/events');
    const response = eventData.data.map((event) => (
        {
            ...event,
            start : new Date(event.start),
            end : new Date(event.end)
        }
    ))
    return response;
}) 

const initialState = {
    eventList : [],
    isloading : false,
    iserror : false
}

export const eventSlice = createSlice({
    name : 'events',
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(getEvents.pending , (state) =>{
                state.isloading = true,
                state.iserror = false
            })
            .addCase(getEvents.fulfilled , (state , action) => {
                state.isloading = false
                state.eventList = action.payload
                state.iserror = false
            })
            .addCase(getEvents.rejected , (state , action) =>{
                state.isloading = false,
                state.iserror = true
                console.log("Error : " + action.error.message);
                
            })
    }
})

export default eventSlice.reducer;

