import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// App components
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alerts />
        </div>
      </div>
    </Router>
  );
}

export default App;
