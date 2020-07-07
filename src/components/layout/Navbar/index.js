import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripLines,
  faSignOutAlt,
  faEnvelope,
  faUser,
  faFileAlt,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../images/logo.svg';

import useStyles from './navbar-jss';

const Navbar = () => {
  const userMenu = (
    <>
      <li className='dropdown'>
        <a
          href='#user'
          className='nav-link dropdown-toggle'
          data-toggle='dropdown'
          aria-expanded='false'
        >
          Hey, <strong>Achraf</strong> 👋
        </a>
        <div className='dropdown-menu dropdown-menu-right'>
          {/* Admin Menu */}
          {true && (
            <>
              <Link className='dropdown-item' to='/pending'>
                <FontAwesomeIcon className='icon mr-2' icon={faCheck} />
                Pending posts
              </Link>
              {/* <Link className='dropdown-item' to='/users'>
                    <FontAwesomeIcon className='icon mr-2' icon={faUsers} />
                    Manage Users
                  </Link> */}
              <div className='dropdown-divider'></div>
            </>
          )}
          <Link className='dropdown-item' to='/posts'>
            <FontAwesomeIcon className='icon mr-2' icon={faFileAlt} />
            Your posts
          </Link>
          <Link className='dropdown-item' to='/profile'>
            <FontAwesomeIcon className='icon mr-2' icon={faUser} />
            Profile
          </Link>
          <div className='dropdown-divider'></div>
          <a className='dropdown-item' href='#logout'>
            <FontAwesomeIcon className='icon mr-2' icon={faSignOutAlt} />
            Sign out
          </a>
        </div>
      </li>

      <li className='message nav-item'>
        <Link className='nav-link link-primary my-sm-0' to='/messages'>
          <FontAwesomeIcon
            className='icon d-none d-lg-inline align-middle'
            icon={faEnvelope}
          />
          <span className='d-inline d-lg-none'>Messages</span>
        </Link>
      </li>
    </>
  );

  const guestMenu = (
    <>
      <li className='nav-item'>
        <Link className='nav-link link-primary my-sm-0 mr-2' to='/login'>
          Sign in
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link button-primary my-sm-0' to='/register'>
          Register
        </Link>
      </li>
    </>
  );

  const [toggleStatus, setToggleStatus] = useState('closed');

  const classes = useStyles();

  const handleToggle = () => {
    toggleStatus === 'closed'
      ? setToggleStatus('opened')
      : setToggleStatus('closed');
  };

  return (
    <nav
      className={`${classes.navbar} navbar navbar-expand-lg navbar-light bg-white`}
    >
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img className='logo' src={Logo} alt='Dirlkhir' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={handleToggle}
        >
          <FontAwesomeIcon
            style={
              toggleStatus !== 'closed' && {
                transformOrigin: 'center',
                transform: 'rotate(90deg)',
              }
            }
            icon={faGripLines}
          />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/requests'>
                Requests
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/donations'>
                Donations
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blood'>
                Blood
              </Link>
            </li>
          </ul>

          {/* Check if logged in */}
          <ul className='navbar-nav'>{false ? userMenu : guestMenu}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
