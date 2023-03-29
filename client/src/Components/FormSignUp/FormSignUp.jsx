import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import AlertMessage from '../AlertyMessage/AlertMessage';
import { useDispatch } from 'react-redux';
import { registerUSer } from '../../Store/Slices/User/Thunk';
import { useHistory } from 'react-router-dom';

const FormSigUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (data) => {
    dispatch(registerUSer(data))
    setTimeout(() => {
      history.push('/LogIn')
    }, 1500);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
      setMessage('Required a email');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
      setMessage('Required a email valid');
    }

    if (!values.phone) {
      errors.phone = 'Required';
      setMessage('Required a phone');
    } else if (!/^\d{10}$/i.test(values.phone)) {
      errors.phone = 'Invalid phone number';
      setMessage('Required a phone number valid');
    }

    if (!values.password) {
      errors.password = 'Required';
      setMessage('Required a password');
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      setMessage('Password must be at least 8 characters long');
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
      setMessage('confirm password');
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
      setMessage('Passwords must match');
    }

    if (!values.name) {
      errors.name = 'Required';
      setMessage('Required a name');
    }
    if (Object.keys(errors).length) {
      setError(true);
    } else {
      setError(false);
    }

    return errors;
  };

  return (
    <>
      {error && <AlertMessage message={message} />}
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <Form>
          <div className="form-floating mb-3">
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              className={`form-control`}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <Field
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className={'form-control '}
            />
            <label htmlFor="phone">Phone number</label>
          </div>

          <div className="form-floating mb-3">
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className={'form-control '}
            />
            <label htmlFor="password">password</label>
          </div>

          <div className="form-floating mb-3">
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirmPassword"
              className={'form-control '}
            />
            <label htmlFor="confirmPassword">confirmPassword</label>
          </div>
          <button type='submit' className='btn btn-info'>sigIn</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormSigUp;
