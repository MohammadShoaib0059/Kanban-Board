import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BoardState } from "../../Common/Common";

const initialState: BoardState = {
  boards: [],
  status: "idle",
  error: null,
};

export const CreateBoard = createAsyncThunk(
  "createBoard/CreateBoard",
  async (Values: { name: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/board", Values);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const createBoardSlice = createSlice({
  name: "createBoard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateBoard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateBoard.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.boards.push(action.payload);
      })
      .addCase(CreateBoard.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default createBoardSlice.reducer;
