import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch users from the JSON server
export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  return response.json();
});

// Add a new user to the JSON server
export const createUser = createAsyncThunk(
  "createUser",
  async (newUser) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    return response.json();
  }
);

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
        state.users.push(action.payload); // Add new user to the state
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error creating user:", action.error.message);
      });
  },
});

export default userSlice.reducer;
