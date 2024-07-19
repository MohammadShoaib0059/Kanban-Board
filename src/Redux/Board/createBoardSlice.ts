import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BoardState, CreateBoardParams } from "../../Common/Common";
import { setStatus } from "../General/ComponentStateSlice";
import { addNotification } from "../notifications/notificationSlice";
// import { Base_URL, Create_Board } from "../../config";

const initialState: BoardState = {
  boards: [],
  status: "idle",
  error: null,
};

export const CreateBoard = createAsyncThunk(
  "NewBoard/CreateBoard",
  async (Values: CreateBoardParams,{dispatch}) => {
    // debugger
    dispatch(setStatus(true));
    try {
      // const response = await axios.post(Base_URL + Create_Board, Values);
      const response = await axios.post(`http://localhost:3000/board`, Values);
      console.log("Board response",response);
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'Board created successfully!'
      }));
      return response.data;
    } catch (error: any) {
      console.log("Borad error",error.response.data.message);
      dispatch(addNotification({
        id: Date.now(),
        type: 'error',
        message: error.response.data.message
      }));
    }finally{
      setTimeout(()=>{
        dispatch(setStatus(false));
      },1000)
     
    }
  }
);

const createBoardSlice = createSlice({
  name: "NewBoard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateBoard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateBoard.fulfilled, (state) => {
        state.status = "succeeded";
        // state.boards.push(action.payload);
      })
      .addCase(CreateBoard.rejected, (state) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export default createBoardSlice.reducer;
