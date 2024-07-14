import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateTaskParams } from '../../Common/Common';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';

export const CreateTask = createAsyncThunk(
  'GetTask/createTask',
//   async ({ Values, bucketId }: CreateTaskParams, { rejectWithValue }) => {
//     // debugger
//     try {
//       const response = await axios.post('http://localhost:3000/task', { ...Values, bucketId }, {
//         headers: { 
//           // 'Authorization': `Bearer ${yourAuthToken}`
//           'Content-Type': 'multipart/form-data',
//          }
//       });
//       return response.data;
//     } catch (error) {
//       throw error; 
//     }
//   }
// );
async ({ formData, bucketId }: CreateTaskParams, { dispatch }) => {
  try {
    dispatch(setStatus(true));
    formData.append('bucketId', bucketId); // Add bucketId to formData
    const response = await axios.post('http://localhost:3000/task', formData, {
      headers: { 
        'Content-Type': 'multipart/form-data',
      }
    });
    dispatch(addNotification({
      id: Date.now(),
      type: 'success',
      message: 'Task created successfully!'
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

const CreateTaskSlice = createSlice({
  name: 'GetTask',
  initialState: {
    task: [],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.task = action.payload;
      })
      .addCase(CreateTask.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default CreateTaskSlice.reducer;
