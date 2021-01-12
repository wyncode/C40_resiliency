import React from 'react';
import UserSidebar from '../components/Sidebar/UserSidebar';
import routes from '../routes';

import Twilio from '../views/Twilio';

const UserHome = () => {
  return (
    <div>
      <UserSidebar routes={routes} />
      <div className="content"></div>
    </div>
  );
};

export default UserHome;
