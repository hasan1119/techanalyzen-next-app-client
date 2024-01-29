import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = {};
    },
    update: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { login, logout, update } = userSlice.actions;
export default userSlice.reducer;
