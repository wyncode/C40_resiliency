import React, { useState, useContext } from 'react';
import {
  Grid,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const UserSignupInfo = ({ history }) => {
  const [formData, setFormData] = useState(null);

  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      setCurrentUser(response.data.user);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1>The Resiliency Connection</h1>
        <Form>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="First Name..."
              onChange={handleChange}
            />
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="Last Name..."
              onChange={handleChange}
            />
            <ControlLabel>Date of Birth</ControlLabel>
            <FormControl
              type="text"
              // value={this.state.value}
              placeholder="Date of Birth..."
              onChange={handleChange}
            />
          </FormGroup>
          <ControlLabel>E-mail</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="E-mail..."
            onChange={handleChange}
          />
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Phone Number..."
            onChange={handleChange}
          />
          <ControlLabel>Street Address</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Street Address..."
            onChange={handleChange}
          />
          <ControlLabel>City</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="City..."
            onChange={handleChange}
          />
          <ControlLabel>State</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="State..."
            onChange={handleChange}
          />
          <ControlLabel>Zip Code</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Zip Code..."
            onChange={handleChange}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Password..."
            onChange={handleChange}
          />
        </Form>
        <Link href="/login">Already have an account? Log in.</Link>
      </Grid>
    </React.Fragment>
  );
};

export default UserSignupInfo;
