import React, { useState } from 'react';
import {
  Grid,
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import '../assets/css/forms.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await axios.get(`/api/users/password?email=${email}`);
      swal('Email sent.', 'Check your email to reset password.');
      form.reset();
    } catch (error) {
      swal('Oops', 'Something went wrong');
    }
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form onSubmit={handleSubmit} ClassName="auth-wrapper">
        <div className="auth-inner">
          <h3 className="mb-4">Forgot Password</h3>
          <FormGroup controlId="formBasicEmail">
            <ControlLabel>Email address</ControlLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <Button type="submit" variant="danger">
              Reset Password
            </Button>
          </FormGroup>
        </div>
      </Form>
    </Grid>
  );
};

export default ForgotPassword;
