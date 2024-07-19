// tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Base_URL, Get_All_Task } from '../../config';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  // const response = await axios.get(Base_URL + Get_All_Task);
  const response = await axios.get(`http://localhost:3000/task`);
  console.log("response", response);

  return response.data;
});
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed';
      });
  }
});
export default tasksSlice.reducer;
