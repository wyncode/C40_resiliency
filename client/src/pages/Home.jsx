import React from 'react';
import Navigation from '../components/UserNavigation';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <a href="https://react.school" class="nonprof-button" target="_blank">
        <Button> I Can Help </Button>
      </a>
      <a href="https://react.school" class="user-button" target="_blank">
        <Button> I Need Help </Button>
      </a>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default Home;
