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
import '../assets/css/forms.css';

const UserSignup = ({ history }) => {
  const [formData, setFormData] = useState('');

  const { setCurrentUser } = useContext(AppContext);

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
        history.push('/userhome');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form onSubmit={handleSignUp} className="auth-wrapper">
        <div className="auth-inner">
          <h3>User Registration</h3>
          <p>
            Our NGO partners are equipped to offer the following essential
            services:
          </p>
          <FormGroup>
            <p>Select one or more categories below...</p>
            <input
              onChange={handleChange}
              type="radio"
              id="water"
              name="aidType"
              value="water"
            />
            <label for="water">Water</label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="food"
              name="aidType"
              value="food"
            />
            <label for="food">Food</label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="education"
              name="aidType"
              value="health services"
            />
            <label for="education">Childrens Education</label>
            <br />
            <input
              onChange={handleChange}
              type="radio"
              id="health"
              name="aidType"
              value="health services"
            />
            <label for="heath">Health Services</label>
          </FormGroup>
          <FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Briefly describe your need:</ControlLabel>
              <FormControl
                name="aidDesc"
                componentClass="textarea"
                placeholder="200 words"
                onChange={handleChange}
              />
            </FormGroup>
            <div className="form-group">
              <label>File</label>
              <input name="photo" type="file" onChange={handleChange} />
              You may upload a photo to accompany your request.
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth (you must be 18+)</label>
              <input
                name="dob"
                type="date"
                className="form-control"
                placeholder="dob"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Your org's street address"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="State"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zip"
                className="form-control"
                placeholder="Zip Code"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                help="Password must be 8 characters"
                onChange={handleChange}
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
