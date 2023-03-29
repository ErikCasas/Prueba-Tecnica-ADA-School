import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

/**
 * If the user is not an admin, redirect to the home page. Otherwise, render the component
 * @returns A function that returns a component.
 */
const AdminRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if ( user?.role !=='Admin') {
    return <Redirect to={'/home'} />;
  }
  return <Route {...props} />;
};

export default AdminRoute;
  