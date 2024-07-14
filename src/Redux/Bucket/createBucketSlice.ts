import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BucketState, CreateBucketParams } from '../../Common/Common';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';

const initialState: BucketState = {
  buckets: [],
  status: 'idle',
  error: null,
};
export const CreateBucket = createAsyncThunk(
  'NewBucket/CreateBucket',
  async ({ name, boardId }: CreateBucketParams,{dispatch}) => {
    // debugger
    try {
      dispatch(setStatus(true));
      const response = await axios.post('http://localhost:3000/bucket', { name, boardId });
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Bucket created successfully!'
      }));
      return response.data;
    } catch (error:any) {
      dispatch(addNotification({
        id: Date.now(),
        type: 'error',
        message: error.response.data.message
      }));
      console.log("Bucket error",error.response.data.message);
    }finally{
      setTimeout(()=>{
        dispatch(setStatus(false));
      },1000)
     
    }
  }
);

const createBucketSlice = createSlice({
  name: 'NewBucket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateBucket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateBucket.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(CreateBucket.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default createBucketSlice.reducer;
