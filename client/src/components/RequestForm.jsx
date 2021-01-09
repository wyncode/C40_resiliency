import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const requestForm = () => {
  const [requestData, setrequestData] = useState(null);

  const { setLoading } = useContext(AppContext);

  const handleChange = (e) => {
    setrequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handlerequestsubmission = async (e) => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/requests',
        withCredentials: true,
        data: requestData
      });
      console.log(response);
      setrequestData(null);
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handlerequestsubmission}>
        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter a request"
            name="description"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup controlId="formBasicDueDate">
          <ControlLabel>Due Date</ControlLabel>
          <FormControl
            type="date"
            placeholder="Enter a request"
            name="dueDate"
            onChange={handleChange}
            className="col-md-4"
          />
        </FormGroup>
        <FormGroup controlId="formBasicEmail">
          <Button type="submit">Add request</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default requestForm;
