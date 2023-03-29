import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import AlertMessage from '../AlertyMessage/AlertMessage';
import { createTicket } from '../../Store/Slices/Ticket/Thunk';

const FormCreateTicket = () => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState(false)

  const initialValues = {
    name: '',
    date: '',
    price: '',
    origin: '',
    destiny: '',
    departureTime: '',
    numberOfPassengers: '',
    quantityAvailable: quantity,
  };

  const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Required';
      setMessage('Please enter a name');
    }
  
    if (!values.date) {
      errors.date = 'Required';
      setMessage('Please enter a departure date');
    }
  
    if (!values.price) {
      errors.price = 'Required';
      setMessage('Please enter a price');
    }
  
    if (!values.origin) {
      errors.origin = 'Required';
      setMessage('Please enter an origin');
    }
  
    if (!values.destiny) {
      errors.destiny = 'Required';
      setMessage('Please enter a destination');
    }
  
    if (!values.numberOfPassengers) {
      errors.numberOfPassengers = 'Required';
      setMessage('Please enter the number of passengers');
    } 
  
    if (!values.departureTime) {
      errors.departureTime = 'Required';
      setMessage('Please enter a departure time');
    }

    if (Object.keys(errors).length) {
        setErrors(true);
      } else {
        setErrors(false);
        setQuantity(initialValues.numberOfPassengers)
      }
  
    return errors;
  };

  const handlerSubmit = (values) => {
    console.log(values)
    dispatch(createTicket(values))
  };

  return (
    <>
     {errors && <AlertMessage message={message} />}
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validate={validate}
      >
        <Form>
          <div className="form-floating mb-6">
            <Field
              name="name"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name rute"
            />
            <label htmlFor="floatingInput">Name rute</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="date"
              type="date"
              className="form-control"
              id="floatingInputDate"
              placeholder="Deperture time"
            />
            <label htmlFor="floatingInputDate">Departure date</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="departureTime"
              type="time"
              className="form-control"
              id="floatingInputdepartureTime"
              placeholder="name rute"
            />
            <label htmlFor="floatingInputdepartureTime">Departure Time</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="price"
              type="number"
              className="form-control"
              id="floatingInputPrice"
              placeholder="price"
            />
            <label htmlFor="floatingInputPrice">$Price</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="origin"
              type="text"
              className="form-control"
              id="floatingInputorigin"
              placeholder="origin"
            />
            <label htmlFor="floatingInputorigin">Origin</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="destiny"
              type="text"
              className="form-control"
              id="floatingInputDestiny"
              placeholder="Destiny"
            />
            <label htmlFor="floatingInputDestiny">Destiny</label>
          </div>

          <div className="form-floating mb-6">
            <Field
              name="numberOfPassengers"
              type="number"
              className="form-control"
              id="f-loatingInputPassangers"
              placeholder="number of passengers"
            />
            <label htmlFor="floatingInputPassangers">
              number of passengers
            </label>
          </div>

    
          <button type="submit" className="btn btn-info">
            Create
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormCreateTicket;
