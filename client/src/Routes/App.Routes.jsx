import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FormCreateTicket from '../Components/FormCreateTicket/FormCreateTicket';
import FormLogIn from '../Components/FormLogIn/FormLogIn';
import FormSigIn from '../Components/FormSignUp/FormSignUp';
import NavBar from '../Components/NavBAr/NavBar';
import Test from '../Components/test/test';
import Home from '../Pages/home/Home';
import { SetUserState } from '../Store/Slices/User/Thunk';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.length) {
      dispatch(SetUserState());
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/LogIn" component={FormLogIn} />
          <PublicRoute exact path="/SigIn" component={FormSigIn} />
          <Route exact path={'/test'} component={FormCreateTicket} />
          <Route exact path="/home" component={Home} />
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
