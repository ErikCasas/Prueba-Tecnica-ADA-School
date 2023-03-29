import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FormCreateTicket from '../Components/FormCreateTicket/FormCreateTicket';
import FormSigIn from '../Components/FormSignUp/FormSignUp';
import Layout from '../Layout/Layout';
import CreateTicket from '../Pages/CreateTicket/CreateTicket';
import BuyTicket from '../Pages/DetailTicket/BuyTicket';
import DetailUser from '../Pages/DetailUser/DetailUser';
import Home from '../Pages/home/Home';
import ListUsers from '../Pages/ListUsers/ListUsers';
import LogIn from '../Pages/LogIn/LogIn';
import SignUp from '../Pages/SignUp/SignUp';
import { SetUserState } from '../Store/Slices/User/Thunk';
import AdminRoute from './AdminRoutes';
import ClientRoute from './ClientRoutes';
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
            {/* <Route exact path={'/test'} component={ListUsers} /> */}
            {/* If there is a logged-in user, they will not be able to access these paths*/}
            <PublicRoute exact path="/LogIn" component={LogIn} />
            <PublicRoute exact path="/SigIn" component={SignUp} />

            <ClientRoute exact path={'/profile/:id'} component={DetailUser} />
            <ClientRoute exact path={'/ticket/:id'} component={BuyTicket} />
            <ClientRoute exact path="/home" component={Home} />

            {/* if the user is not an administrator, he will be redirected to the Home component */}
            <AdminRoute exact path={'/users'} component={ListUsers} />
            <AdminRoute exact path={'/createTicket'} component={CreateTicket} />
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
