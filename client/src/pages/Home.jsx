import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Logo from '../assets/img/logo-img.png';
import '../assets/css/home.css';
import { Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <Grid>
      <Jumbotron fluid className="jumbo">
        <div className="jumbocopycontainer">
          <h2>The Resiliency Connection</h2>
          <div className="jumbocopy">
            <p>
              Welcome to The Resiliency Connection. We want to help you feel
              supported in the midst of difficulty.
            </p>
            <br />
            <br />
            <p>
              If you are in need of assistance, or can provide humanitarian
              services for people in need,please select your button choice
              below.
            </p>
          </div>
          <div className="homeButton">
            <div className="q1">
              <Link className="btn btn-primary" to="/usersignup">
                Receive Help
              </Link>
            </div>
            <div className="q2">
              <Link className="btn btn-primary" to="/ngosignup">
                Share Help
              </Link>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </div>
      </Jumbotron>
    </Grid>
  );
}

export default Home;
