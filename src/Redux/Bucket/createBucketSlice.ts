import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BucketState } from '../../Common/Common';
// import { BucketState } from '../Common/Common';

const initialState: BucketState = {
  buckets: [],
  status: 'idle',
  error: null,
};
export const CreateBucket = createAsyncThunk(
  'CreateBucket/CreateBucket',
  async ({ name, boardId }: { name: string; boardId: string }, { rejectWithValue }) => {
    console.log("newBoard",name,boardId);
    // debugger
    try {
      const response = await axios.post('http://localhost:3000/bucket', { name, boardId });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const createBucketSlice = createSlice({
  name: 'createBucket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateBucket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateBucket.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(CreateBucket.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default createBucketSlice.reducer;
