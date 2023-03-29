import React from 'react';
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
        <div className="container-fluid">
          <div className="container-fluid">
            <Link to={'/home'}>
              <button className="btn btn-outline-info me-2" type="button">
                Home
              </button>
            </Link>

            {user?.user.role === 'Admin' ? (
              <>
                <Link to={'/editUsers'}>
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
          <Link to={`/profile/${user?.user.id}`}>
            <button className="btn btn-outline-info me-2" type="button">
              Profile
            </button>
          </Link>

          <button
            className="btn btn-outline-danger me-3 "
            type="button"
            onClick={LogOut}
          >
            Log-Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
