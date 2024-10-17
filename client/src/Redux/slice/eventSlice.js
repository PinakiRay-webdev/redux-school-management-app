import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = 'http://localhost:3001/events'

export const getEvents = createAsyncThunk("getEvents" , async()=>{
    const eventData = await axios.get(base_url);
    const response = eventData.data.map((Element) => (
        {
            ...Element,
            start : new Date(Element.start),
            end : new Date(Element.end)
        }
    ))
    return response;
}) 

export const createEvent = createAsyncThunk("createEvent" , async(newEvent) => {
    try {
        const response = await axios.post(base_url , newEvent , {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        return response.data
    } catch (error) {
        console.log({error : error.message});
        
    }
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

        builder
            .addCase(createEvent.pending , (state) => {
                state.isloading = true,
                state.iserror = false
            })
            .addCase(createEvent.fulfilled , (state , action) => {
                state.isloading = false,
                state.eventList = state.eventList.push(action.payload)
                state.iserror = false
            })
            .addCase(createEvent.rejected , (state , action) => {
                state.isloading = false,
                state.iserror = true,
                console.log("Error: " + action.error.message);
                
            })
    }
})

export default eventSlice.reducer;

