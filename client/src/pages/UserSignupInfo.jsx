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
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1>Task Manager</h1>
      <Form style={{ width: 300 }} onSubmit={handleSignUp}>
        <FormGroup>
          <ControlLabel htmlFor="fullName">Full Name</ControlLabel>
          <FormControl
            id="fullName"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="email">Email Address</ControlLabel>
          <FormControl
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </FormGroup>
      </Form>
      <Link className="mt-4" to="/login">
        Already have an account? Log in.
      </Link>
    </Grid>
  );
};

export default UserSignupInfo;
