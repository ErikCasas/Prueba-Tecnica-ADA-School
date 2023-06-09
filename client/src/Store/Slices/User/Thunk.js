import { api } from '../../../api/axiosConfig';
import {
  getUsers,
  logInUser,
  setMessage,
  setUser,
  updateStateUser,
} from './UserSlice';

export const LogInUser = (data) => {
  return async function (dispatch) {
    try {
      const response = await api.post('/LogIn', data);
      window.localStorage.setItem('token', JSON.stringify(response.data.token));
      window.localStorage.setItem('user', JSON.stringify(response.data));
      // console.log('response :>> ', response.data);
      dispatch(logInUser({ user: response.data }));
    } catch (error) {
      // console.log('error :>> ', error.response.data.error);
      dispatch(setMessage(error.response.data.error));
    }
  };
};

export const SetUserState = () => {
  return function (dispatch) {
    const logedUser = window.localStorage.getItem('user');
    if (logedUser) {
      const user = JSON.parse(logedUser);
      dispatch(setUser(user));
    }
  };
};

export const LogOutUser = () => {
  return function (dispatch) {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    dispatch(setUser(null));
  };
};

export const registerUSer = (data) => {
  return async function (dispatch) {
    try {
      await api.post('/SignUp', data);
      dispatch(setMessage('Now you can log in'));
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    const { data } = await api.get('/GetAll');
    dispatch(getUsers(data));
  };
};

export const updateUser = () => {
  return async function (dispatch) {
    try {
      const response = await api.put('/Edit');
      window.localStorage.removeItem('user');
      window.localStorage.setItem('user', JSON.stringify(response.data));
      // console.log('>>>>>', response.data);
      dispatch(updateStateUser(response.data));
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
};
