import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:3001/events";

//get event
export const getEvents = createAsyncThunk("getEvents" , async() => {
  const response = await axios.get(base_url)
  return response.data;
})

//create event

export const createEvent = createAsyncThunk("createEvent", async (newEvent) => {
  const response = await axios.post(base_url, newEvent, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data
});

// delete event 
export const deleteEvent = createAsyncThunk("deleteEvent" , async(eventID) => {
  await axios.delete(`${base_url}/${eventID}`)
  return eventID
})

//update event
export const updateEvent = createAsyncThunk("updateEvent" , async(updatedEvent) => {
  const response = await axios.patch(`${base_url}/${updatedEvent}` , updateEvent , {
    headers:{
      'Content-Type' : 'application/json'
    }
  })
  return response.data
})

const initialState = {
  eventList: [],
  isLoading: false,
  isError: false,
};

export const EventSlice = createSlice({
  name: "events",
  initialState,
  extraReducers : (builder) => {
    
    //handling read events
    builder
      .addCase(getEvents.pending , (state) => {
        state.isLoading = true,
        state.isError = false
      })
      .addCase(getEvents.fulfilled , (state , action) => {
        state.isLoading = false,
        state.eventList = action.payload
      })
      .addCase(getEvents.rejected , (state , action) => {
        state.isLoading = false
        state.isError = true
        console.log("Error : "+action.error.message);
      });

      //handling create events
    builder
        .addCase(createEvent.pending , (state) => {
            state.isLoading = true,
            state.isError = false
        })
        .addCase(createEvent.fulfilled , (state , action) => {
            state.isLoading = false,
            state.eventList = [...eventList , action.payload],
            state.isError = false
        })
        .addCase(createEvent.rejected , (state , action) => {
            state.isLoading = false,
            state.isError = true,
            console.log("Error " + action.error.message);     
        });
   builder
        .addCase(deleteEvent.pending , (state) => {
          state.isLoading = true,
          state.isError = false
        })
        .addCase(deleteEvent.fulfilled , (state , action) =>{
          state.isLoading = false,
          state.eventList = state.eventList.filter((e) => e.id !== action.payload)
          state.isError = false
        })
        .addCase(deleteEvent.rejected , (state , action) => {
          state.isLoading = false,
          state.isError = true,
          console.log("Error: "+action.error.message);
          
        })
    
    builder
        .addCase(updateEvent.pending , (state) => {
          state.isLoading = true,
          state.isError = false
        })
        .addCase(updateEvent.fulfilled , (state , action) => {
          state.isLoading = false;
          const index = state.eventList.findIndex((e) => e.id === action.payload.id)
          if(index !== -1){
            state.eventList[index] = action.payload
          }
        })
        .addCase(updateEvent.rejected , (state , action) => {
          state.isLoading = false,
          state.isError = true,
          console.log("Error : "+action.error.message);
        })

  }
});

export default EventSlice.reducer
