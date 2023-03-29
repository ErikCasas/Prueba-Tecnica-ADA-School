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
      state.user = action.payload.user;
    },
    signUp: (state, action) => {
      state.user = action.payload.user.data;
    },
    editUser: (state, action) => {
      state.user = action.payload.user.data;
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
      console.log(action.payload);
      // state.user = action.payload.user;
    },
  },
});

export const { logInUser, signUp, editUser, getUsers, setMessage, setUser,updateStateUser } =
  UserSlice.actions;

export default UserSlice.reducer;
