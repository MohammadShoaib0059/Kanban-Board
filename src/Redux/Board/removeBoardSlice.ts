// tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};

export const deleteboard = createAsyncThunk('deleteboard/removeboard', 
    async (id: string,{dispatch}) => {
    // debugger
    try {
      dispatch(setStatus(true));
      const response = await axios.delete(`http://localhost:3000/board/${id}`);
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Board removed successfully!'
      }));
      return response.data;
    } catch (error:any) {
      dispatch(addNotification({
        id: Date.now(),
        type: 'error',
        message: error.response.data.message
      }));
    }finally{
      setTimeout(()=>{
        dispatch(setStatus(false));
      },1000)
     
    }
  


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
