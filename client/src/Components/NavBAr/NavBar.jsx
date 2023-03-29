import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutUser } from '../../Store/Slices/User/Thunk';

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(LogOutUser());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className=" container-fluid d-flex justify-content-between">
          <div className="container-fluid">
            {user ? (
              <>
                <Link to={'/home'}>
                  <button className="btn btn-outline-info me-2" type="button">
                    Home
                  </button>
                </Link>
              </>
            ) : null}

            {user?.role === 'Admin' ? (
              <>
                <Link to={'/users'}>
                  <button className="btn btn-outline-info me-2" type="button">
                    edit users
                  </button>
                </Link>
                <Link to={'/createTicket'}>
                  <button className="btn btn-outline-info me-2" type="button">
                    create ticket
                  </button>
                </Link>
              </>
            ) : null}
          </div>
          {user ? (
            <>
              <div className="container-fluid ">
                <Link to={`/profile/${user?.id}`}>
                  <button className="btn btn-outline-info me-2" type="button">
                    Profile
                  </button>
                </Link>

                <button
                  className="btn btn-outline-danger me-2"
                  type="button"
                  onClick={LogOut}
                >
                  LogOut
                </button>
              </div>
            </>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
