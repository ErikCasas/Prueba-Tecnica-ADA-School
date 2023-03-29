import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector(state => state.user)
  console.log(user);
  return (
    <>
      <h1>qweq</h1>
      <p>user</p>
      <hr />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to = {'/home'}>
          <button className="btn btn-outline-info me-2" type="button">
            Home
          </button>
          </Link>
          <button className="btn btn-outline-danger me-2" type="button">
            Log Out
          </button>
         
    
        </div>
      </nav>
    </>
  );
};

export default NavBar;
