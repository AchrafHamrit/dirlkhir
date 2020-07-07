import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './auth-jss';

const Login = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      // Set Alert
    } else {
      // Login function
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

        <input type='submit' value='Login' className='button-primary mt-3' />
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

export default Login;
