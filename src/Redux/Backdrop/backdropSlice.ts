import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  backDropOpen: false,
};

// Create a slice
const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    setBackDropOpen: (state, action) => {
      state.backDropOpen = action.payload;
    },
  },
});

// Export actions
export const { setBackDropOpen } = backdropSlice.actions;

// Export reducer
export default backdropSlice.reducer;
