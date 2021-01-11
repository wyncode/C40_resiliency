/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component, useEffect, useState } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminNavbar from '../components/Navbars/AdminNavbar';
// import Footer from '../components/Footer/Footer';
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
      <Sidebar routes={routes} />
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Requests for Aid"
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
