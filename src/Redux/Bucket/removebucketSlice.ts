// tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};

export const deletebucket = createAsyncThunk('removebucket/deletebucket', 
  async (id: string) => {
    // debugger
    const response = await axios.delete(`http://localhost:3000/bucket/${id}`);
  console.log("response", response);

  return response.data;
});

const removebucketSlice = createSlice({
  name: 'removebucket',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletebucket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletebucket.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deletebucket.rejected, (state) => {
        state.status = 'failed';
      });
  }
});
export default removebucketSlice.reducer;
