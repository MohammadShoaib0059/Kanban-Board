import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UpdateTaskParams } from "../../Common/Common";
import { setStatus } from "../General/ComponentStateSlice";
import { addNotification } from "../notifications/notificationSlice";
import { Base_URL, Update_Task } from "../../config";

export const UpdateTask = createAsyncThunk(
  "updateTask/UpdateTask",
  async (
    { id, boardId, bucketId,formData }: UpdateTaskParams,
    { dispatch,rejectWithValue }
  ) => {
    // debugger
    try {
      dispatch(setStatus(true));
      formData.append('bucketId', bucketId); 
      formData.append('boardId', boardId); 
      formData.append('id', id); 
      const response = await axios.put(
        `${Base_URL}${Update_Task}/${id}`,
        formData ,
        {
          // headers: { 'Authorization': `Bearer ${yourAuthToken}` }
        }
      );
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Task updated successfully!'
      }));
      return response.data;
    } catch (error: any) {
      dispatch(addNotification({
        id: Date.now(),
        type: 'error',
        message: error.response.data.message
      }));
      return rejectWithValue(error.response.data);
    }finally{
      setTimeout(()=>{
        dispatch(setStatus(false));
      },1000)
     
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
