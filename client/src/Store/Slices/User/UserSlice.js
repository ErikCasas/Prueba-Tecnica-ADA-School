import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  allUsers: [],
  isLoading: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.user;
    },
    signUp: (state, action) => {
      state.user;
    },
    editUser: (state, action) => {
      state.user;
    },
    getAllUsers: (state, action) => {
      state.allUsers;
    },
  },
});

export const { logInUser, signUp, editUser, getAllUsers} = UserSlice.actions