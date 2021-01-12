import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card/Card';
import Logo from '../assets/img/crlogo.svg';

function Home() {
  return (
    <div className="logo-img">
      <img src={Logo} alt="crlogo" />
    </div>
  );
}

export default Home;
