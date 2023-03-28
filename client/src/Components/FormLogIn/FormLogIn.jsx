import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Formik, Field } from 'formik';
import { LogInUser } from '../../Store/Slices/User/Thunk';
import AlertMessage from '../AlertyMessage/AlertMessage';

const FormLogIn = () => {
  
  const state = useSelector(state=>state.user.message)
  const dispatch = useDispatch()

  const handlerSubmit = (e) => {
    console.log(state);
    dispatch(LogInUser(e))
  };

  return (
    <>
          {state?<AlertMessage message={state}/>:null}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handlerSubmit}
      >
        <Form>
        <div className="form-floating mb-6">
          <Field name="email" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <Field name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
          <button type='submit' className='btn btn-info'>LogIn</button>
        </Form>
      </Formik>
    
    </>
  );
};


export default FormLogIn;
