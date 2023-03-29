import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBAr/NavBar';

/**
 * The Layout component is a function that returns the NavBar, the children, and the Footer components.
 */
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
