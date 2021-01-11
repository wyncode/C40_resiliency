import React from 'react';
import AppBar from '../components/UserNavigation';
import Twilio from '../views/Twilio';

const UserHome = () => {
  return (
    <div>
      <AppBar />
      {/* integrate Twilio here */}
      {/* include link to profile */}
      <Twilio />
    </div>
  );
};

export default UserHome;
