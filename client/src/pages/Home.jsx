import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <h2>Resiliency Connection</h2>
      <p>Welcome to Resiliency Connection. We are glad you are here.</p>

      <p>
        Welcome to Resiliency Connection. We are glad you are here. Please let
        us know if you are here because you are in need of assistance, or if you
        are here to offer assistance to those in need.
      </p>

      <h4>
        I need assistance in the form of Food, Water, Education and/or Health
      </h4>
      <Button href="/usersignupinfo">Click Me</Button>
      <h4>I am an NGO and can offer assistance</h4>
      <Button href="/npsignup">Click Me</Button>
    </div>
  );
}

export default Home;
