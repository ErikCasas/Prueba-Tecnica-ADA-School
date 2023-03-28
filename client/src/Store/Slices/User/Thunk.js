import axios from 'axios';
import { logInUser, setMessage } from './UserSlice';

export const LogInUser = (data) => {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3002/LogIn', data);
      // window.set
      dispatch(logInUser({ user: response }));
    } catch (error) {
      console.log('error :>> ', error.response.data.error);
      dispatch(setMessage(error.response.data.error))
    }
  };
};
