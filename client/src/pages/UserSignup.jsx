import React, { useState, useContext } from 'react';
import {
  Grid,
  Form,
  FormGroup,
  Radio,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import Home from '../views/Map/Home';
import '../assets/css/forms.css';

const UserSignup = ({ history }) => {
  const [formData, setFormData] = useState('');

  const { setCurrentUser, userAddress } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post('/api/users', formData)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem('user', res.data);
        setCurrentUser(res.data);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form className="auth-wrapper">
        <div className="auth-inner">
          <h3>User Registration</h3>
          <p>
            Our NGO partners are equipped to offer the following essential
            services:
          </p>
          <FormGroup>
            <p>Select one or more categories below...</p>
            <Radio name="radioGroup">Water</Radio>{' '}
            <Radio name="radioGroup">Food</Radio>{' '}
            <Radio name="radioGroup">Health Services</Radio>{' '}
            <Radio name="radioGroup">Childrens Education</Radio>
          </FormGroup>
          <FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Briefly describe your need:</ControlLabel>
              <FormControl componentClass="textarea" placeholder="200 words" />
            </FormGroup>
            <div className="form-group">
              <label>File</label>
              <input type="file" />
              You may upload a photo to accompany your request.
            </div>
            <Home />
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>

            <div className="form-group">
              <label>Date of Birth (you must be 18+)</label>
              <input type="date" className="form-control" placeholder="dob" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your org's street address"
                defaultValue={userAddress?.split(',')[0]}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                defaultValue={userAddress?.split(',')[1]}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                defaultValue={userAddress?.split(',')[3]}
              />
            </div>

            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Zip Code"
                defaultValue={userAddress?.split(',')[2]}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                help="Password must be 8 characters"
              />
            </div>
          </FormGroup>

          <Link
            onClick={handleSignUp}
            className="btn btn-primary btn-block"
            to="/login"
          >
            Register
          </Link>
          <p className="forgot-password">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </Grid>
  );
};

export default UserSignup;
