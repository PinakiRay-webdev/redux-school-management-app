import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL_students = "http://localhost:3000/students";
const BASE_URL_students = "https://redux-school-management-app.onrender.com/students";
// const BASE_URL_mentors = "http://localhost:3000/mentors";
const BASE_URL_mentors = "https://redux-school-management-app.onrender.com/mentors";

// Get students from the JSON server
export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(BASE_URL_students);
  return response.data;
});

// Get mentors from the json server
export const getMentors = createAsyncThunk("getMentors" , async()=>{
  const response = await axios.get(BASE_URL_mentors);
  return response.data;
})

// Create user for the JSON server
export const createUser = createAsyncThunk("createUser", async (newUser) => {
  const response = await axios.post(BASE_URL_students, newUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

//create mentors for the json server
export const createMentor = createAsyncThunk("createMentor" , async (newMentor) => {
  const response = await axios.post(BASE_URL_mentors , newMentor , {
    headers:{
      'Content-Type' : 'application/json'
    },
  });

  return response.data;
})

// Delete user from the JSON server
export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  await axios.delete(`${BASE_URL_students}/${userId}`);
  return userId;
});

export const deleteMentor = createAsyncThunk("deleteMentor" , async(userId) =>{
  await axios.delete(`${BASE_URL_mentors}/${userId}`)
})

// Update user on the JSON server
export const updateUser = createAsyncThunk("updateUser", async (updatedUser) => {
  const response = await axios.patch(`${BASE_URL_students}/${updatedUser.id}`, updatedUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});


const initialState = {
  students: [],
  mentors : [],
  isLoading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // Handle getUsers
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error fetching students:", action.error.message);
      })

      //handle get mentors
      .addCase(getMentors.pending , (state) => {
        state.isLoading = true,
        state.isError = false
      })
      .addCase(getMentors.fulfilled , (state , action) => {
        state.isLoading = true,
        state.mentors = action.payload
        state.isError = false
      })
      .addCase(getMentors.rejected , (state , action) => {
        state.isLoading = false,
        state.isError = true,
        console.log("error " , action.error.message);
        
      })

      // Handle createUser
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error creating user:", action.error.message);
      })

      //handle create mentors
      

      // Handle deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = state.students.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error deleting user:", action.error.message);
      })

      //handle delete mentor
      .addCase(deleteMentor.pending , (state) =>{
        state.isLoading = true,
        state.isError = false
      })
      .addCase(deleteMentor.fulfilled , (state , action) =>{
        state.isLoading = false,
        state.mentors = state.mentors.filter((user) => user.id !== action.payload)
      })
      .addCase(deleteMentor.rejected , (state , action) =>{
        state.isLoading = false,
        state.isError = true,
        console.log("Error : " + action.error.message);

      })

      // Handle updateUser
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.students.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = action.payload; // Update the user in the state
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error updating user:", action.error.message);
      });
  },
});

export default userSlice.reducer;
