import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>I need help</h3>
      <Button as={Link} to="/usersignup">
        Click Me
      </Button>
    </div>
  );
}

export default Home;
