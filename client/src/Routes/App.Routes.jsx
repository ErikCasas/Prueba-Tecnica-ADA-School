import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FormLogIn from '../Components/FormLogIn/FormLogIn';
import Test from '../Components/test/test';
import { SetUserState } from '../Store/Slices/User/Thunk';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetUserState());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/LogIn" component={FormLogIn} />
          <Route path="/" component={Test}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;


/**
 * un ejemplo en una version anterior de react-router-dom
 *     <BrowserRouter>
        <Switch>
          <Route exact path={"/ejemplo"} component={ejemplo} />
        </Switch>
    </BrowserRouter>
 * 
 */