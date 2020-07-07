import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// App components
import Navbar from './components/layout/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
