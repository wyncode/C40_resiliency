import { useState, useEffect } from 'react';
import ContextDemo from './components/ContextDemo';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div id="demo">
      <h3>Hello from client/src/App.js</h3>
      <ContextDemo />
      <h3>{serverMessage}</h3>
    </div>
  );
};

export default App;
