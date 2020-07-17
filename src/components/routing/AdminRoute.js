import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Spinner
import Spinner from '../layout/Spinner';

const AdminRoute = ({ component: Component, user, loading, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : user && user.role_id === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

const mapSateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapSateToProps)(AdminRoute);
