import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutUser } from '../../Store/Slices/User/Thunk';
import Logo from '../../svg/Logo.svg';
import styled from 'styled-components';

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(LogOutUser());
  };

  return (
    <>
      <NAV className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src={Logo}
            width="170"
            height="90"
            alt="LogoAda"
            className="d-inline-block align-text-top"
          />

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNav"
          >
            {user ? (
              <>
                <UL className="navbar-nav m-4 fw-bold">
                  <Link to={'/home'} style={{textDecoration:'none'}}>
                    <LI className="nav-item m-1">
                      <Item className="navbar-brand">Home</Item>
                    </LI>
                  </Link>
                  {user?.role === 'Admin' ? (
                    <>
                      <Link to={'/users'} style={{textDecoration:'none'}}>
                        <LI className="nav-item m-1">
                          <Item
                            className="navbar-brand"
                            aria-current="page"
                            href="#"
                          >
                            Users List
                          </Item>
                        </LI>
                      </Link>
                      <Link to={'/createTicket'} style={{textDecoration:'none'}}>
                        <LI className="nav-item m-1">
                          <Item
                            className="navbar-brand"
                            aria-current="page"
                            href="#"
                          >
                            Create Ticket
                          </Item>
                        </LI>
                      </Link>
                    </>
                  ) : null}
                </UL>

                <UL className="navbar-nav fw-bold">
                  <Link to={`/profile/${user?.id}`} style={{textDecoration:'none'}}>
                    <LI className="nav-item m-1">
                      <Item
                        className="navbar-brand">
                        Profile
                      </Item>
                    </LI>
                  </Link>
                  <button
                    className="btn btn-outline-danger me-2"
                    type="button"
                    onClick={LogOut}
                  >
                    <LI className="nav-item m-1">
                      <Item >
                        LogOut
                      </Item>
                    </LI>
                  </button>
                </UL>
              </>
            ) : null}
          </div>
        </div>
      </NAV>
    </>
  );
};

const Item = styled.div`
  width: 100%;
  height: 100%;
`;
const LI = styled.li``;

const UL = styled.ul`
  height: 100%;
`;

const NAV = styled.nav`
  background-color: #c6c6c6;
  box-shadow: 0px 10px 10px;
`;

export default NavBar;
