import React from 'react';
import Navigation from '../components/Navigation';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default Home;
