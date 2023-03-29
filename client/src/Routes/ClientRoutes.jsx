import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ClientRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  if ( user===null ) {
    return <Redirect to={'/LogIn'} />;
  }
  return <Route {...props} />;
};

export default ClientRoute;
