import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeTask = createAsyncThunk(
  'removetask/removeTask',
  async (id: string) => {
    // debugger
    try {
      const response = await axios.delete(`http://localhost:3000/task/${id}`)
      console.log(response.data);
      
      return response.data;
    } catch (error) {
    }
  }
);

const removeTaskSlice = createSlice({
  name: 'removetask',
  initialState: {
    task: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.task = action.payload;
      })
      .addCase(removeTask.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default removeTaskSlice.reducer;
