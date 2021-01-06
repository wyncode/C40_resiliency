import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import request from './request';
import Search from './Search';

const requestList = () => {
  const {
    setRequests,
    search,
    filteredRequests,
    setFilteredRequests,
    loading
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/requests?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setRequests(response.data);
        setFilteredRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRequests, setFilteredRequests, search, loading]);

  return (
    <Container>
      <Search />
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Due</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <Request requests={filteredRequests} />
        </tbody>
      </Table>
    </Container>
  );
};

export default requestList;
