import React from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AlertMessage from '../AlertyMessage/AlertMessage';
import { registUser } from '../../Store/Slices/User/Thunk';

const FormSignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = 'Phone is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    dispatch(registUser(values));
    setTimeout(() => {
      history.push('/LogIn');
    }, 3000);
  };

  return (
    <>
      <h1>Registro</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ errors }) => (
          <Form>
            {Object.keys(errors).length > 0 && (
              <AlertMessage message={Object.values(errors)[0]} />
            )}
            <div className="form-floating mb-6">
              <Field
                name="name"
                type="text"
                className="form-control"
                id="floatingInputName"
                placeholder="name"
              />
              <label htmlFor="floatingInputName">Name</label>
            </div>

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

            <div className="form-floating mb-6">
              <Field
                name="phone"
                type="number"
                className="form-control"
                id="floatingInputNumber"
                placeholder="Phone number"
              />
              <label htmlFor="floatingInputNumber">Phone number</label>
            </div>
            <div className="form-floating mb-6">
              <Field
                name="password"
                type="password"
                className="form-control"
                id="floatingInputPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingInputPassword">Password</label>
            </div>
            <div className="form-floating mb-6">
              <Field
                name="confirmPassword"
                type="password"
                className="form-control"
                id="floatingInputPassword2"
                placeholder="Confirm password"
              />
              <label htmlFor="floatingInputPassword2">Confirm password</label>
            </div>
            <button type="submit" className="btn btn-info">
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormSignUp;


