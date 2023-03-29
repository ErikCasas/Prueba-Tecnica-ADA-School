import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if (user !== null) {
    return <Redirect to={'/home'} />;
  }
  return <Route {...props} />;
};

export default PublicRoute;
