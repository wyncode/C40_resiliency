import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to The Resiliency Connection</h2>

      <p>
        Welcome to The Resiliency Connection. We want to help you feel supported
        in the midst of difficulty. If you are in need of assistance, or can
        provide humanitarian services for people in need, please select your
        button choice below. If you are in immediate danger, please dial 911.
      </p>

      <h4>
        Do you need human services such as Food, Water, Health or Children's
        Education Services?
      </h4>
      <Link className="btn btn-primary" to="/usersignup">
        Receive Help
      </Link>
      <h4>
        Are you a 501c3 Non Governmental Organization who can provide assistance
        to people in need?
      </h4>
      <Link className="btn btn-primary" to="/ngosignup">
        Share Help
      </Link>
    </div>
  );
}

export default Home;
