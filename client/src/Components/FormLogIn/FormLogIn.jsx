import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import { LogInUser } from '../../Store/Slices/User/Thunk';
import AlertMessage from '../AlertyMessage/AlertMessage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const FormLogIn = () => {
  const message = useSelector((state) => state.user.message);

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    dispatch(LogInUser(e));
  };

  return (
    <>
      {message ? <AlertMessage message={message} /> : null}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handlerSubmit}
      >
        <Form>
          <div className="form-floating mb-6">
            <Field
              name="email"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <Field
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

<containerButtons className='d-flex'>
          <button type="submit" className="btn btn-info">
            LogIn
          </button>
          <Link to={'/SigIn'}>
            <button type="submit" className="btn btn-warning">
              SigIn
            </button>
          </Link>
</containerButtons>
        </Form>
      </Formik>
    </>
  );
};


const containerButtons = styled.div`

`
export default FormLogIn;
