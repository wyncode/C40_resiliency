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

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      swal('Error', 'Passwords must match.');
    }

    try {
      await axios.put(
        '/api/users/password',
        { password: password.password },
        { withCredentials: true }
      );
      swal('Updated!', 'Your password has been updated', 'success');
      history.push('/login');
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };

  return (
    <Grid className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <Form onSubmit={handleSubmit} ClassName="auth-wrapper">
        <div className="auth-inner">
          <h3 className="mb-4">Update Password</h3>
          <FormGroup controlId="formBasicPassword">
            <ControlLabel>New Password</ControlLabel>
            <ControlLabel
              type="password"
              placeholder="Enter new password"
              name="password"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter new password"
              name="confirmPassword"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Update Password
            </Button>
          </FormGroup>
        </div>
      </Form>
    </Grid>
  );
};

export default UpdatePassword;
