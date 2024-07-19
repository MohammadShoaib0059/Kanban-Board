// tasksSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';
// import { Base_URL, RemoveBucket } from '../../config';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};

export const deletebucket = createAsyncThunk('removebucket/deletebucket', 
  async (id: string,{dispatch}) => {
    // debugger
    try {
      dispatch(setStatus(true));
      // const response = await axios.delete(`${Base_URL}${RemoveBucket}/${id}`);
      // const response = await axios.delete(`https://kanban-board-e8jw.onrender.com/bucket/${id}`);
      const response = await axios.delete(`http://localhost:3000/bucket/${id}`);
      console.log("response", response);
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Bucket removed successfully!'
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
