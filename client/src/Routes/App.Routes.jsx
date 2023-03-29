import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CardTicketDetail from '../Components/CardTicketDetail/CardTicketDetail';
import CardUser from '../Components/CardUser/CardUser';
import Footer from '../Components/Footer/Footer';
import FormCreateTicket from '../Components/FormCreateTicket/FormCreateTicket';
import FormLogIn from '../Components/FormLogIn/FormLogIn';
import FormSigIn from '../Components/FormSignUp/FormSignUp';
import NavBar from '../Components/NavBAr/NavBar';
import Test from '../Components/test/test';
import Layout from '../Layout/Layout';
import BuyTicket from '../Pages/DetailTicket/BuyTicket';
import DetailUser from '../Pages/DetailUser/DetailUser';
import Home from '../Pages/home/Home';
import ListUsers from '../Pages/ListUsers/ListUsers';
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
            <Route exact path={'/test'} component={ListUsers} />

            <PublicRoute exact path="/LogIn" component={FormLogIn} />
            <PublicRoute exact path="/SigIn" component={FormSigIn} />
            <Route exact path={'/createTicket'} component={FormCreateTicket} />
            <Route exact path={'/profile/:id'} component={DetailUser} />
          
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
 * un ejemplo en una version mas actual de react-router-dom
 *     <BrowserRouter>
        <Rouetes>
          <Route exact path={"/ejemplo"} elemenet={<ejemplo/>} />
        </Routes>
    </BrowserRouter>
 * 
 */
