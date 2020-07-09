import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { login, clearErrors } from '../../redux/actions/authActions';
import { setAlert } from '../../redux/actions/alertActions';

// Components
import Spinner from '../layout/Spinner';

import useStyles from './auth-jss';

const Login = (props) => {
  const {
    isAuthenticated,
    error,
    loading,
    login,
    clearErrors,
    setAlert,
  } = props;

  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setAlert('Please enter all fields');
    } else {
      login({ username, password });
    }
  };

  return (
    <div className={`${classes.root} card-shadow text-center`}>
      <h3 className='title'>Sign in</h3>
      <h6 className='subtitle'>Start helping or getting help.</h6>

      <form className='mt-4' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            className='input-text'
            type='text'
            name='username'
            value={username}
            placeholder='Username'
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            className='input-text'
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={onChange}
            required
          />
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <input type='submit' value='Login' className='button-primary mt-3' />
        )}
      </form>

      <p className='form-link mt-3'>
        Login Trouble?{' '}
        <Link to='/login'>
          <span>Reset password</span>
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, { login, clearErrors, setAlert })(Login);
