// Redux/Auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginsParams } from '../../Common/Common';

export const Loginkanban = createAsyncThunk(
  'auth/Loginkanban',
  async (Values: LoginsParams) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { ...Values });
      return response.data;
    } catch (error) {
      throw error; 
    }
  }
);

export const Logoutkanban = createAsyncThunk(
  'auth/Logoutkanban',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as any;
    const token = state.auth.token;
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error; 
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
      .addCase(Loginkanban.rejected, (state, action) => {
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
      .addCase(Logoutkanban.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.payload;
      });
  },
});

export const {setIsLoggedIn} = authSlice.actions
export default authSlice.reducer;
