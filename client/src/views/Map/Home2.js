import React, { Component, useEffect, useState } from 'react';
import Map2 from './Map2';

const Home = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('/api/users/all')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ margin: '100px' }}>
      <Map2
        users={users}
        center={{ lat: 18.2208, lng: -66.5901 }}
        height="300px"
        zoom={15}
      />
    </div>
  );
};

export default Home;
