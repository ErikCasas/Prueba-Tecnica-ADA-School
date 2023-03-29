import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

/**
 * If the user is not logged in, redirect to the login page. Otherwise, render the component
 */
const ClientRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if (user === null) {
    return <Redirect to={'/LogIn'} />;
  }
  return <Route {...props} />;
};

export default ClientRoute;
