
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TaskState } from '../../Common/Common';
import { Base_URL, GetTaskById } from '../../config';

const initialState: TaskState = {
  task: null,
  status: 'idle',
  error: null,
};

export const fetchtaskById = createAsyncThunk(
  'taskById/fetchtaskById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${Base_URL}${GetTaskById}/${id}`);
      console.log('response => fetchtaskById',response.data);
      
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const taskByIdSlice = createSlice({
  name: 'taskById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchtaskById.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchtaskById.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.task = action.payload;
    })
    .addCase(fetchtaskById.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default taskByIdSlice.reducer;
