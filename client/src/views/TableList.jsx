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
import React, { Component } from 'react';
// import { Grid, Row, Col, Table } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';

const AidTable = [
  {
    dataField: 'firstName',
    text: 'First Name'
  },
  {
    dataField: 'lastname',
    text: 'Last Name',
    sort: true
  },
  {
    dataField: 'aidType',
    text: 'Aid Type',
    sort: true
  },
  {
    dataField: 'email',
    text: 'E-Mail'
  },
  {
    dataField: 'phone',
    text: 'Phone'
  },
  {
    dataField: 'address',
    text: 'Address'
  },
  {
    dataField: 'city',
    text: 'City',
    sort: true
  },
  {
    dataField: 'state',
    text: 'State',
    sort: true
  },
  {
    dataField: 'zip',
    text: 'Zip Code',
    sort: true
  },
  {
    dataField: 'photo',
    text: 'Photo'
  }
];

function Table({ ...prop }) {
  return <AidTable keyField="id" data={prop} striped hover condensed />;
}

export default Table;
// columns={key}
