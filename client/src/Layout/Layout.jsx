import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBAr/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
