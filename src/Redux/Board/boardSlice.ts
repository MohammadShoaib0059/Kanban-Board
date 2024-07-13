import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const fetchBoard = createAsyncThunk("boardData/fetchBoard", async () => {
  const response = await axios.get("http://localhost:3000/board");
  console.log("response", response);

  return response.data;
});

const boardDataSlice = createSlice({
  name: "boardData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBoard.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default boardDataSlice.reducer;
