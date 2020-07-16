import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux store
import store from './redux/store';

// App layout components
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Footer from './components/layout/Footer';

// App pages
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/pages/Profile';
import RequestsPage from './components/pages/posts/requests/RequestsPage';
import RequestShow from './components/pages/posts/requests/RequestShow';

// Routes
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ScrollToTop />
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alerts />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/profile' component={Profile} />

              <Route exact path='/requests' component={RequestsPage} />
              <Route exact path='/requests/:id' component={RequestShow} />

              <Route component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
