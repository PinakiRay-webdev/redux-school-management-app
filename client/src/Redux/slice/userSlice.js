import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userInfo from "../../../users.json";

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await fetch("http://localhost:3000/users");
  return response.json();
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
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true,
      console.log("Error : ", action.error.message);
      
    });
  },
});

// export const { createUsers } = userSlice.actions;
export default userSlice.reducer;
