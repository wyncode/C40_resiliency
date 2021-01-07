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
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a request"
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter a request"
            name="dueDate"
            onChange={handleChange}
            className="col-md-4"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Button type="submit">Add request</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default requestForm;
