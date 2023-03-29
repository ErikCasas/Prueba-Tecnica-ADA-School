import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  allUsers: [],
  message: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.user = action.payload.user;
    },
    getUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateStateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logInUser, getUsers, setMessage, setUser, updateStateUser } =
  UserSlice.actions;

export default UserSlice.reducer;
