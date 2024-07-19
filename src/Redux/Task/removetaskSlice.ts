import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';
// import { Base_URL, RemoveTask } from '../../config';

export const removeTask = createAsyncThunk(
  'removetask/removeTask',
  async (id: string,{dispatch}) => {
    // debugger
    try {
      dispatch(setStatus(true));
      // const response = await axios.delete(`${Base_URL}${RemoveTask}/${id}`)
      const response = await axios.delete(`http://localhost:3000/task/${id}`)
      // const response = await axios.delete(`https://kanban-board-e8jw.onrender.com/task/${id}`)
      console.log(response.data);
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Task removed successfully!'
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
