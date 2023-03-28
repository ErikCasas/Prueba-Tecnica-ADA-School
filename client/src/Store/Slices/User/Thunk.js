import axios from 'axios';

export const LogInUser = (data) => {
  try {
    return async function (dispatch) {
      const response = await axios.post('http://localhost:3002/LogIn',data);
      console.log(response);
      dispatch({user:response})
    };
  } catch (error) {
    console.log(error);
  }
};
