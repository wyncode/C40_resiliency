import React from 'react';
import Navigation from '../components/UserNavigation';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <h3>I need help</h3>
      <Button as={Link} to="/UserSignup">
        Click Me
      </Button>
      ;
    </div>
  );
}

export default Home;
