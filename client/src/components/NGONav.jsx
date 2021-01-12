import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import logo from '../assets/img/res_logo.png';

const NGONav = () => {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        {/* <!-- BRAND --> */}
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#alignment-example"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            Your Brand
          </a>
        </div>

        {/* <!-- COLLAPSIBLE NAVBAR --> */}
        <div class="collapse navbar-collapse" id="alignment-example">
          {/* <!-- Links --> */}
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">
                Link 1 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>

          {/* <!-- Link (right) --> */}
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NGONav;
