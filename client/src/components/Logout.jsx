import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import history from '../history';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  // const history = useHistory();

  const handleSignOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!', 'success').then(() =>
        history.push('/login')
      );
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };
  return <Dropdown onClick={handleSignOut}>Logout</Dropdown>;
};

export default Logout;
