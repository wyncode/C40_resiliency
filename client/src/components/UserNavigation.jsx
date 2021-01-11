import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import logo from '../assets/img/res_logo.png';
const UserNavigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100vw',
        height: '10rem',
        backgroundColor: 'blue',
        color: 'white',
        padding: '1rem'
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ width: '8rem', borderRadius: '25px' }}
        />
      </div>
      <div>
        <Link to="/callpage">Call Us</Link>
        <Logout />
      </div>
    </nav>
  );
};

export default UserNavigation;
