import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserSignupInfo from './UserSignupInfo';

function Home() {
  return (
    <div>
      <h2>Resiliency Connection</h2>
      <h4>Welcome to Resiliency Connection. We are glad you are here.</h4>
      <h4>Please let us know if you are here because you are in need</h4>
      <h4>of assistance, or if you are here to offer assistance to those</h4>
      <h4>in need.</h4>

      <h4>
        I need assistance in the form of Food, Water, Education and/or Health
      </h4>
      <Button as={Link} to="/usersignupinfo">
        Click Me
      </Button>
      <h4>I am an NGO and can offer assistance</h4>
      <Button as={Link} to="/npsignup">
        Click Me
      </Button>
    </div>
  );
}

export default Home;
