// Redux/Auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginsParams } from '../../Common/Common';
import { setStatus } from '../General/ComponentStateSlice';
import { addNotification } from '../notifications/notificationSlice';
// import { Base_URL, Login, Logout } from '../../config';

export const Loginkanban = createAsyncThunk(
  'auth/Loginkanban',
  async (values: LoginsParams,{dispatch}) => {
    dispatch(setStatus(true));
    try {
      // const response = await axios.post(Base_URL + Login, { ...values });
      const response = await axios.post(`http://localhost:3000/auth/login`, { ...values });
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'You have signed-in successfully!'
      }));
      return response.data;
    } catch (error:any) {
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

export const Logoutkanban = createAsyncThunk(
  'auth/Logoutkanban',
  async (_, { getState, dispatch }) => {
    const state = getState() as any;
    const token = state.auth.token;
    dispatch(setStatus(true));
    try {
      const response = await axios.post(
        // Base_URL + Logout,
        `http://localhost:3000/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addNotification({
        id: Date.now(),
        type: 'success',
        message: 'You have signed-out successfully!'
      }));
      return response.data;
    } catch (error:any) {
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

const storedToken = localStorage.getItem("token");
const storedRole = localStorage.getItem("role");
const initialLoggedInState = storedToken ? true : false;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: initialLoggedInState,
    role: storedRole,
    token: storedToken,
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Loginkanban.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Loginkanban.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.role = action.payload.role;
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
        localStorage.setItem('token', action.payload.access_token);
        localStorage.setItem('role', action.payload.role);
      })
      .addCase(Loginkanban.rejected, (state) => {
        state.status = 'failed';
        // state.error = action.payload;
      })
      .addCase(Logoutkanban.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.role = "";
        state.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      })
      .addCase(Logoutkanban.rejected, (state) => {
        state.status = 'failed';
        // state.error = action.payload;
      });
  },
});

export const {setIsLoggedIn} = authSlice.actions
export default authSlice.reducer;
