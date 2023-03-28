import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PublicRoute = (props) => {

  const {user} = useSelector(state=> state.user)
  console.log(user);
  if(user)<Redirect to={'/home'}/> 
    return <Route {...props}/>
};

export default PublicRoute;
