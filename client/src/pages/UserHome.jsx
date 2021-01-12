import React from 'react';
import UserNavigation from '../components/UserNavigation';
import Twilio from '../views/Twilio';
import AdminNavbar from '../components/Navbars/AdminNavbar';

const UserHome = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <UserNavigation />
      {/* integrate Twilio here */}
      {/* include link to profile */}
      <Twilio />
    </div>
  );
};

export default UserHome;
