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
    layout: ''
  },

  {
    path: '/dashboard',
    name: 'Table List',
    icon: 'pe-7s-note2',
    component: TableList,
    layout: ''
  }

  // {
  //   path: '/maps',
  //   name: 'Maps',
  //   icon: 'pe-7s-map-marker',
  //   component: Maps,
  //   layout: ''
  // }
];

export default dashboardRoutes;
