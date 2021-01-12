import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { Carousel } from 'react-bootstrap';
import config from '../assets/img/config.png';

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeTop">
        <div className="banner">
          <h3>The Resiliency Connection</h3>
          <p>
            Welcome to The Resiliency Connection. We want to help you feel
            supported in the midst of difficulty. If you are in need of
            assistance, or can provide humanitarian services for people in need,
            please select your button choice below.
          </p>
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
        <div className="logo-img">
          <img src={logo} alt="crlogo" className="logo" />
        </div>
      </div>
      <div className="carouselDiv">
        {/* <Carousel className="carousel">
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={config} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>; */}
      </div>
    </div>
  );
}

export default Home;
