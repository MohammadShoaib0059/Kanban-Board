import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UpdateTaskParams } from "../../Common/Common";

export const UpdateTask = createAsyncThunk(
  "updateTask/UpdateTask",
  async (
    { id, boardId, bucketId,formData }: UpdateTaskParams,
    { rejectWithValue }
  ) => {
    debugger
    try {
      formData.append('bucketId', bucketId); 
      formData.append('boardId', boardId); 
      formData.append('id', id); 
      const response = await axios.put(
        `http://localhost:3000/task/${id}`,
        formData ,
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

const UpdateTaskSlice = createSlice({
  name: "updateTask",
  initialState: {
    task: null as any,
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UpdateTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.task = action.payload;
      })
      .addCase(UpdateTask.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default UpdateTaskSlice.reducer;
