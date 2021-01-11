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
import Dashboard from './views/Dashboard.jsx';
import UserProfile from './views/NGOProfile';
import TableList from './views/TableList.jsx';
import Typography from './views/Typography.jsx';
import Icons from './views/Icons.jsx';
import Maps from './views/Maps.jsx';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: './views/NGOProfile.jsx',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: NGOProfile,
    layout: '/admin'
  },
  {
    path: './views/TableList.jsx',
    name: 'Request Table',
    icon: 'pe-7s-note2',
    component: TableList,
    layout: '/admin'
  },

  {
    path: './views/Map/Home2.js',
    name: 'Maps',
    icon: 'pe-7s-map-marker',
    component: Maps,
    layout: '/admin'
  },
  {
    path: './views/Twilio.jsx',
    name: 'Twilio',
    icon: 'pe-7s-science',
    component: Twilio,
    layout: '/admin'
  }
];

export default dashboardRoutes;
