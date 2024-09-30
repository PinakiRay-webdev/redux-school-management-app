import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

// Get users from the JSON server
export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// Create user for the JSON server
export const createUser = createAsyncThunk("createUser", async (newUser) => {
  const response = await axios.post(BASE_URL, newUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

// Delete user from the JSON server
export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  await axios.delete(`${BASE_URL}/${userId}`);
  return userId;
});

// Update user on the JSON server
export const updateUser = createAsyncThunk("updateUser", async (updatedUser) => {
  const response = await axios.patch(`${BASE_URL}/${updatedUser.id}`, updatedUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});


const initialState = {
  users: [],
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
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error fetching users:", action.error.message);
      })

      // Handle createUser
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error creating user:", action.error.message);
      })

      // Handle deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error deleting user:", action.error.message);
      })

      // Handle updateUser
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload; // Update the user in the state
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
