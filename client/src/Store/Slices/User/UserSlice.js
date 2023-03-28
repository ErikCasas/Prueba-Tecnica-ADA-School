import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  allUsers: [],
  isLoading: false,
  message: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.user = action.payload.user.data;
    },
    signUp: (state, action) => {
      state.user = action.payload.user.data;
    },
    editUser: (state, action) => {
      state.user = action.payload.user.data;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logInUser, signUp, editUser, getAllUsers, setMessage, setUser } =
  UserSlice.actions;

export default UserSlice.reducer;
