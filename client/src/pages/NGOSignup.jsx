import React, { useState, useContext } from 'react';
import { Grid, Form, FormGroup, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import '../assets/css/forms.css';

const NPSignup = ({ history }) => {
  const [formData, setFormData] = useState('');

  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    fetch('/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })
      .then((res) => res.json())
      .then((res) => {
        sessionStorage.setItem('user', res);
        setCurrentUser(res);
        history.push('/dashboard');
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form className="auth-wrapper" onSubmit={handleSignUp}>
        <div className="auth-inner">
          <h3>NGO Registration</h3>

          <FormGroup>
            <div className="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                name="orgName"
                className="form-control"
                placeholder="Which organization do you represent?"
                onChange={handleChange}
              />
            </div>
            <input type="hidden" name="admin" value="true" />
            <div className="form-group">
              <label>File</label>
              {/* <input type="file" name="logo" onChange={handleChange} /> */}
              Upload organization logo here.
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
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Title/Position</label>
              <input
                type="text"
                name="positionTitle"
                className="form-control"
                placeholder="What is your position or title?"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth (you must be 18+)</label>
              <input
                type="date"
                name="dob"
                className="form-control"
                placeholder="dob"
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
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="State"
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
                onChange={handleChange}
                help="Password must be 8 characters"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Checkbox inline>
              By checking this box, I confirm that I am a representative of a
              501(c)3 organization, non-profit, or government agency that can
              provide assistance to community members.{' '}
            </Checkbox>
          </FormGroup>

          <Button
            type="submit"
            // onClick={handleSignUp}
            className="btn btn-primary btn-block"
            // to="/login"
          >
            Register
          </Button>
          <p className="forgot-password">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </Grid>
  );
};

export default NPSignup;
