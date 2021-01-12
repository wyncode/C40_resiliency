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
import React from 'react';
// import { Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card/Card';
import { StatsCard } from '../components/StatsCard/StatsCard.jsx';
// import { style } from '../variables/Variables.jsx';
import Table from './TableList';
import Home2 from '../views/Map/Home2';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import NGONav from '../components/NGONav';

const Dashboard = ({ history }) => {
  return (
    <>
      <NGONav />

      <Grid fluid style={{ marginLeft: '40rem' }}>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-drop text-info" />}
              statsText="Water"
              statsValue="10"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-cart text-success" />}
              statsText="Food"
              statsValue="8"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-notebook text-danger" />}
              statsText="Education"
              statsValue="3"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-bandaid text-warning" />}
              statsText="Health"
              statsValue="5"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              statsIcon="fa fa-history"
              id="googleMap"
              title="Request Map"
              category="Displays Request by Location"
              stats="Updated 3 minutes ago"
              content={<Home2 />}
            />
          </Col>
        </Row>{' '}
        {/* <Row>
      <Col md={6}>
        <Card
          statsIcon="fa fa-history"
          id="twillio"
          title="Twillio"
          category="In App Messaging"
          stats="Updated 3 minutes ago"
          content={<Twillio />}
        />
      </Col>
    </Row>{' '} */}
        <Row>
          <Col md={12}>
            <Card statsIcon="fa fa-clock-o" content={<Table />} />{' '}
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Dashboard;
