import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  allUsers: [],
  isLoading: false,
  message:""
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      console.log('SLICE>>',action.payload);
      state.user=action.payload.user
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
    setMessage: (state, action) => {
      state.message = action.payload
    }
  },
});

export const { logInUser, signUp, editUser, getAllUsers, setMessage} = UserSlice.actions