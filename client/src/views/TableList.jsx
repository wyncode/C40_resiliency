import React, { Component, useEffect, useState } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import NGOSidebar from '../components/Sidebar/Sidebar';

import routes from '../routes';
import Card from '../components/Card/Card.jsx';
import { thArray, tdArray } from '../variables/Variables.jsx';

const TableList = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('/api/users/all')
      .then((data) => data.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NGOSidebar routes={routes} />
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Aid Request Table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover responsive>
                    <thead>
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Aid Type</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Photo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <table style={{ width: '100%' }} className="table table-hover"> */}

                      {users?.map((user) => {
                        return (
                          <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.aidType}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <td>{user.zip}</td>
                            <td>{user.photo}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default TableList;
