import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// App layout components
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// App pages
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alerts />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
