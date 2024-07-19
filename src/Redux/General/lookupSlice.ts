import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Base_URL, lookup } from '../../config';

const initialState = {
  data: {},
  status: 'idle',
  error: null
};
export const fetchLookUp = createAsyncThunk('lookUp/fetchLookUp', async () => {
  // const response = await axios.get(Base_URL + lookup);
  const response = await axios.get(`http://localhost:3000/lookup`);
  console.log("response",response);
  
  return response.data;
});

const lookUpSlice = createSlice({
  name: 'lookUp',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLookUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLookUp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLookUp.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default lookUpSlice.reducer;
