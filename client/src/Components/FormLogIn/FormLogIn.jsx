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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handlerSubmit}
      >
        <Form>
          <ContainerForm>
            <CointainerInput className="form-floating mb-6">
              <Field
                name="email"
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </CointainerInput>
            <CointainerInput className="form-floating mb-3">
              <Field
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </CointainerInput>
            {message ? <AlertMessage message={message} /> : null}

            <ContainerButtons className='"container-fluid"'>
              <button type="submit" className="btn btn-lg btn-info">
                LogIn
              </button>
              <Link to={'/SigIn'}>
                <button type="submit" className="btn-lg btn btn-warning">
                  SigIn
                </button>
              </Link>
            </ContainerButtons>
          </ContainerForm>
        </Form>
      </Formik>
    </>
  );
};

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const ContainerForm = styled.div`
  width: 60vh;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-between;
  border-radius: 15px;
  margin: 40px;
  border: 5px solid #48b5d7;
  box-shadow: 25px 45px 15px;
  background-color: aliceblue;
`;

const CointainerInput = styled.div`
  margin-top: 10px;
`;
export default FormLogIn;
