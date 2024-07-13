// tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};

export const deleteboard = createAsyncThunk('removebucket/deletebucket', 
    async (id: string) => {
    // debugger
    const response = await axios.delete(`http://localhost:3000/board/${id}`);
  console.log("response", response);

  return response.data;
});

const removeboardSlice = createSlice({
  name: 'removeboard',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteboard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteboard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteboard.rejected, (state) => {
        state.status = 'failed';
      });
  }
});
export default removeboardSlice.reducer;
