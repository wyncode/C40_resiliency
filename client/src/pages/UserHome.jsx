import React, { Component } from 'react';
import Navigation from '../components/UserNavigation';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Your request has been submitted</h1>
    </div>
  );
};

export default UserHome;
