import React from 'react';
import { Route, Routes,BrowserRouter } from "react-router-dom";

import Test from '../Components/test/test';

/**
 * un ejemplo en una version anterior de react-router-dom
 *     <BrowserRouter>
        <Switch>
          <Route exact path={"/ejemplo"} component={ejemplo} />
        </Switch>
    </BrowserRouter>
 * 
 */

const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/test" element={<Test/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRoutes;
