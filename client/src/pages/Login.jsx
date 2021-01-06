import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

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
      console.log(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1>request Manager</h1>
      <Form style={{ width: 300 }} onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/signup">
        Need an account? Sign up.
      </Link>
    </Container>
  );
};

export default Login;
