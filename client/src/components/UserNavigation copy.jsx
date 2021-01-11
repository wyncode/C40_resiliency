import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
// import Logout from './Logout';

const AppBar = () => {
  // const { currentUser } = useContext(AppContext);

  //do we have a hamburger nav bar installed below?
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          request Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item
              className="mr-2"
              style={{
                cursor: 'pointer'
              }}
            >
              Completed
            </Nav.Item>
            <Nav.Item
              className="mr-2"
              style={{
                cursor: 'pointer'
              }}
            >
              Pending
            </Nav.Item>
            <Nav.Item>
              <Dropdown drop="down" className="mr-1">
                <Dropdown.Toggle variant="">
                  <Image
                    src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
                    height={50}
                    width={50}
                    roundedCircle
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    Profile
                  </Dropdown.Item>
                  {/* <Logout /> */}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppBar;
