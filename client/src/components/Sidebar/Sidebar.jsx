import React from 'react';
import Logo from '../../assets/img/crlogo.svg';
import { Link } from 'react-router-dom';
import '../../assets/css/sidebar1.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a
          href="https://www.resiliencyconnection.us"
          className="simple-text logo-normal"
        >
          <div className="logo-img">
            <img src={Logo} alt="crlogo" />
          </div>
        </a>
        {/* <h5>Resiliency Connection</h5> */}
      </div>
      <div className="sidelinks-cont">
        <ul>
          <div className="snavlinks">
            <li>
              <div>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            </li>
          </div>
        </ul>

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
      </div>
    </div>
  );
}
export default Sidebar;
