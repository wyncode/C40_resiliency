import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card } from '../components/Card/Card';
import { StatsCard } from '../components/StatsCard/StatsCard.jsx';
// import { style } from '../variables/Variables.jsx';
import Table from './TableList';
import Home2 from './Map/Home2';
import NGOSidebar from '../components/Sidebar/NGOSidebar';

function Dashboard() {
  return (
    <>
      <NGOSidebar />
      <Grid fluid style={{ marginLeft: '30rem', marginTop: '5rem' }}>
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
          <Col md={12}>
            <Card
              id="googleMap"
              title="Request Map"
              category="Displays Request by Location"
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
          content={<Twillio />}
        />
      </Col>
    </Row>{' '} */}
        <Row>
          <Col md={12}>
            <Card content={<Table />} />{' '}
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default Dashboard;
