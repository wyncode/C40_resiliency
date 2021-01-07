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
import { Grid, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card/Card';
import { StatsCard } from '../components/StatsCard/StatsCard.jsx';
import Maps from './Maps';
import Table from './TableList';

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json['names'].length; i++) {
      var type = 'fa fa-circle text-' + json['types'][i];
      legend.push(<i className={type} key={i} />);
      legend.push(' ');
      legend.push(json['names'][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
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
            <Col md={10}>
              <Card
                statsIcon="fa fa-history"
                id="googleMap"
                title="Request Map"
                category="Displays Request by Location"
                stats="Updated 3 minutes ago"
                content={<Maps />}
              />
            </Col>
          </Row>{' '}
          <Row>
            <Col md={12}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Assistance Requests"
                category="Displays All Requests for Assistance"
                stats="Campaign sent 2 days ago"
                content={<Table />}
              />{' '}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
