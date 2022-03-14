import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk("users/getUsersAsync", async (payload) => {
  const response = await fetch(`https://reqres.in/api/users?page=${payload.page}`);
  if (response.ok) {
    const users = await response.json();
    return users;
  }

  return [];
});

const usersSlice = createSlice({
  name:"users",
  initialState: {
    total_pages: 0,
    data: [],
  },
  extraReducers: {
    [getUsersAsync.fulfilled]: (state, action) => {
      return action.payload;
    },  
  }
});

export default usersSlice.reducer;