import axios from 'axios';
import { logInUser, setMessage, setUser } from './UserSlice';

export const LogInUser = (data) => {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3002/LogIn', data);
      window.localStorage.setItem('Sesión de usuario', JSON.stringify(response))
      dispatch(logInUser({ user: response }));
    } catch (error) {
      console.log('error :>> ', error.response.data.error);
      dispatch(setMessage(error.response.data.error))
    }
  };
};

export const SetUserState = () =>{
  return function (dispatch) {
    const logedUser = window.localStorage.getItem('Sesión de usuario')
    if(logedUser){
      const user = JSON.parse(logedUser)
      dispatch(setUser({user:user.data}))
    }
  } 
}
