import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CardTicketDetail from '../Components/CardTicketDetail/CardTicketDetail';
import Footer from '../Components/Footer/Footer';
import FormCreateTicket from '../Components/FormCreateTicket/FormCreateTicket';
import FormLogIn from '../Components/FormLogIn/FormLogIn';
import FormSigIn from '../Components/FormSignUp/FormSignUp';
import NavBar from '../Components/NavBAr/NavBar';
import Test from '../Components/test/test';
import Layout from '../Layout/Layout';
import BuyTicket from '../Pages/DetailTicket/BuyTicket';
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
        <Layout>
          <Switch>
            <PublicRoute exact path="/LogIn" component={FormLogIn} />
            <PublicRoute exact path="/SigIn" component={FormSigIn} />
            <Route exact path={'/test'} component={CardTicketDetail} />
            <Route exact path={'/createTicket'} component={FormCreateTicket} />
            
            <Route exact path={'/ticket/:id'} component={BuyTicket} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Layout>
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
