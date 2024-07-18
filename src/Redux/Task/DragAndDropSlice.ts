import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UpdateTaskParams } from "../../Common/Common";
import { Base_URL, DargAndDropTask } from "../../config";

export const DargandDropTask = createAsyncThunk(
  "dragTask/DargandDropTask",
  async (
    { id, bucketId }: UpdateTaskParams,
    { rejectWithValue }
  ) => {
    // debugger
    try {
      const response = await axios.patch(
        `${Base_URL}${DargAndDropTask}/${id}/bucket`,
        {bucketId },
        {
          // headers: { 'Authorization': `Bearer ${yourAuthToken}` }
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const DragTaskSlice = createSlice({
  name: "dragTask",
  initialState: {
    task: null as any,
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DargandDropTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DargandDropTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.task = action.payload;
      })
      .addCase(DargandDropTask.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default DragTaskSlice.reducer;
