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
import DonationsPage from './components/pages/posts/donations/DonationsPage';
import DonationShow from './components/pages/posts/donations/DonationShow';
import BloodDonors from './components/pages/blood/BloodDonors';
import MessagesShow from './components/pages/messages/MessagesShow';
import MessagesPage from './components/pages/messages/MessagesPage';
import PendingPosts from './components/pages/posts/pending/PendingPosts';

// Routes
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';

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
              <Route exact path='/donations' component={DonationsPage} />
              <Route exact path='/donations/:id' component={DonationShow} />

              <Route exact path='/blood' component={BloodDonors} />

              <PrivateRoute
                exact
                path='/messages/:id'
                component={MessagesShow}
              />
              <PrivateRoute exact path='/messages' component={MessagesPage} />

              <AdminRoute exact path='/pending' component={PendingPosts} />

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
