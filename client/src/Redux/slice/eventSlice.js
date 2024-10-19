import { createSlice , createAsyncThunk, isPending } from "@reduxjs/toolkit";
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

export const deleteEvent = createAsyncThunk("deleteEvent" , async(taskID) => {
    try {
        await axios.delete(`${base_url}/${taskID}`);
        return taskID;
    } catch (error) {
        console.log({error : error.message});
    }
})

export const updateEvent =  createAsyncThunk("updateEvent" , async(updatedEvent) => {
    try {
        const response = await axios.patch(`${base_url}/${updatedEvent.id}` , updatedEvent , {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        return response.data;
    } catch (error) {
        console.log({Error : error.message});    
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
                state.eventList = [...state.eventList, action.payload];
                state.iserror = false
            })
            .addCase(createEvent.rejected , (state , action) => {
                state.isloading = false,
                state.iserror = true,
                console.log("Error: " + action.error.message);
                
            })

        builder
            .addCase(deleteEvent.pending , (state) => {
                state.isloading = true,
                state.iserror = false
            })
            .addCase(deleteEvent.fulfilled , (state , action) => {
                state.isloading = false,
                state.eventList = state.eventList.filter((e) => e.id !== action.payload)
            })
            .addCase(deleteEvent.rejected , (state , action) => {
                state.isloading = false,
                state.iserror = true,
                console.log(("error " + action.error.message));    
            })

        builder
            .addCase(updateEvent.pending , (state) => {
                state.isloading = true,
                state.iserror = false
            })
            .addCase(updateEvent.fulfilled , (state , action) => {
                state.isloading = false,
                state.index = state.eventList.findIndex((e) => e.id === action.payload.id)
                if(index !== -1){
                    state.eventList[index] = action.payload;
                }
            })
            .addCase(updateEvent.rejected , (state , action) => {
                state.isPending = false,
                state.iserror = true,
                console.log("Event : "+action.error.message);
                
            })
    }
})

export default eventSlice.reducer;

