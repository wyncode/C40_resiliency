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
import '../assets/css/forms.css';

const Login = ({ history }) => {
  const [formData, setFormData] = useState(null);

  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form onSubmit={handleLogin} className="auth-wrapper">
        <div className="auth-inner">
          <h3>Login</h3>
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
          <FormGroup>
            <Button type="submit" className="btn btn-primary btn-block">
              Login
            </Button>
          </FormGroup>
        </div>
      </Form>
    </Grid>
  );
};

export default Login;
