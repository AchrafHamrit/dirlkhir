import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// Actions
import { register, clearErrors } from '../../redux/actions/authActions';
import { setAlert } from '../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../utils/websiteData';

// Components
import Spinner from '../layout/Spinner';

import useStyles from './auth-jss';

const Register = (props) => {
  const {
    isAuthenticated,
    error,
    loading,
    register,
    clearErrors,
    setAlert,
  } = props;

  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, phone, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    if (error) {
      if (typeof error === 'object') {
        if (error.errors && error.errors.length > 0) {
          error.errors.forEach((err) => {
            setAlert(err.msg);
            clearErrors();
          });
        }
      } else {
        setAlert(error);
        clearErrors();
      }
    }

    // eslint-disable-next-line
  }, [error]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || phone === '' || email === '' || password === '') {
      setAlert('Please enter all fields');
    } else if (password.length < 6) {
      setAlert('Password must contain at least 6 characters');
    } else if (password !== password2) {
      setAlert('Passwords do not match');
    } else {
      // Register function
      await register({ username, phone, email, password });
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Register`}</title>
      </Helmet>
      <div className={`${classes.root} card-shadow text-center`}>
        <h3 className='title'>Create Account</h3>
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
              // required
            />
          </div>

          <div className='form-group'>
            <input
              className='input-text'
              type='text'
              name='phone'
              value={phone}
              placeholder='Phone'
              onChange={onChange}
              // required
            />
          </div>

          <div className='form-group'>
            <input
              className='input-text'
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
              // required
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
              // required
            />
          </div>

          <div className='form-group'>
            <input
              className='input-text'
              type='password'
              name='password2'
              value={password2}
              placeholder='Password confirmation'
              onChange={onChange}
              // required
            />
          </div>

          {loading ? (
            <Spinner />
          ) : (
            <input
              type='submit'
              value='Register'
              className='button-primary mt-3'
            />
          )}
        </form>

        <p className='form-link mt-3'>
          Already have an account?{' '}
          <Link to='/login'>
            <span>Sign in</span>
          </Link>
        </p>
      </div>
    </>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapSateToProps, { register, clearErrors, setAlert })(
  Register
);
