import { api } from '../../../api/axiosConfig';
import { logInUser, setMessage, setUser } from './UserSlice';

export const LogInUser = (data) => {
  return async function (dispatch) {
    try {
      const response = await api.post('/LogIn', data);
      window.localStorage.setItem('token', JSON.stringify(response));
      dispatch(logInUser({ user: response }));
    } catch (error) {
      console.log('error :>> ', error.response.data.error);
      dispatch(setMessage(error.response.data.error));
    }
  };
};

export const SetUserState = () => {
  return function (dispatch) {
    const logedUser = window.localStorage.getItem('token');
    if (logedUser) {
      const user = JSON.parse(logedUser);
      dispatch(setUser({ user: user.data }));
    }
  };
};
