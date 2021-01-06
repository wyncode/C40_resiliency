import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import request from './request';
import Search from './Search';

const requestList = () => {
  const {
    setrequests,
    search,
    filteredrequests,
    setFilteredrequests,
    loading
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/requests?sortBy=dueDate:asc', { withCredentials: true })
      .then((response) => {
        setrequests(response.data);
        setFilteredrequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setrequests, setFilteredrequests, search, loading]);

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
          <request requests={filteredrequests} />
        </tbody>
      </Table>
    </Container>
  );
};

export default requestList;
