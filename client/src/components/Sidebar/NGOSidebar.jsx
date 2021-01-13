import React from 'react';
import Logo from '../../assets/img/crlogo.svg';
import { Link } from 'react-router-dom';
import '../../assets/css/sidebar1.css';

function NGOSidebar() {
  return (
    <div className="sidebar1">
      <div className="logo">
        <div className="simple-text logo-normal">
          <div className="logo-img">
            <img src={Logo} alt="crlogo" />
          </div>
        </div>
        {/* <h5>Resiliency Connection</h5> */}
      </div>
      <div className="sidelinks-cont">
        <div className="snavlinks">
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link to="/tablelist">Request Table</Link>
          </div>
          <div>
            <Link to="/home2">Map</Link>
          </div>
          <div>
            <Link to="/twilio">Messaging</Link>
          </div>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NGOSidebar;
