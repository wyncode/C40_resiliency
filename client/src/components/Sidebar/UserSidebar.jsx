import React, { Component } from 'react';
import Logo from '../../assets/img/crlogo.svg';
import { Link } from 'react-router-dom';
import '../../assets/css/sidebar1.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: 'url(' + this.props.image + ')'
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo">
          <a
            href="https://www.resiliencyconnection.us"
            className="simple-text logo-normal"
          >
            <div className="logo-img">
              <img src={Logo} alt="crlogo" />
            </div>
          </a>
          <h5>Resiliency Connection</h5>
        </div>
        <div className="side">
          <div>
            <Link to="/userhome">Home</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link to="/twilio">Messaging</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
