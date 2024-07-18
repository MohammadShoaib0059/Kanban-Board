import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL, GetBucket } from "../../config";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchBucket = createAsyncThunk(
  "bucketData/fetchBucket",
  async (id: string) => {
    // debugger;
    const response = await axios.get(`${Base_URL}${GetBucket}/${id}`);
    console.log("response", response);

    return response.data;
  }
);

const bucketDataSlice = createSlice({
  name: "bucketData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBucket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBucket.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBucket.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bucketDataSlice.reducer;
