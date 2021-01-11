import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import history from '../history';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const { push } = useHistory();

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
        push('/login')
      );
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };
  return <Button onClick={handleSignOut}>Logout</Button>;
};

export default Logout;
