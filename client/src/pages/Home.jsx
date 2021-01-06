import React from 'react';
import Navigation from '../components/Navigation';
import requestForm from '../components/requestForm';
import requestList from '../components/requestList';

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <requestList />
      <requestForm />
    </div>
  );
};

export default Home;
