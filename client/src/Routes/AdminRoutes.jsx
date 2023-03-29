import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AdminRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if ( user?.user?.role !=='Admin') {
    return <Redirect to={'/home'} />;
  }
  return <Route {...props} />;
};

export default AdminRoute;
