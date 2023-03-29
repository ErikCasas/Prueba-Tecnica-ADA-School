import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

/**
 * If the user is logged in, redirect to the home page. Otherwise, render the component.
 * @returns A function that returns a component.
 */
const PublicRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if (user !== null) {
    return <Redirect to={'/home'} />;
  }
  return <Route {...props} />;
};

export default PublicRoute;
