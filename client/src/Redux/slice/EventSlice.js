import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://localhost:3001/events";

//get event
export const getEvents = createAsyncThunk("getEvents" , async() => {
  try {
    const response = await axios.get(base_url)
    return response.data;
  } catch (error) {
    console.log({error : error.message});
  }
})

//create event

export const createEvent = createAsyncThunk("createEvent", async (newEvent) => {
  try {
    const response = await axios.post(base_url, newEvent, {
      headers: {
        "Content-Type": "json/application",
      },
    });
    return response.data
  } catch (error) {
    console.log({Error : error.message});
    
  }
});

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
        state.isError = false
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
            state.eventList = {...[eventList , action.payload]},
            state.isError = false
        })
        .addCase(createEvent.rejected , (state , action) => {
            state.isLoading = false,
            state.isError = true,
            console.log("Error " + action.error.message);
            
        })
  }
});

export default EventSlice.reducer
