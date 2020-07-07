import React from 'react';
import { Link } from 'react-router-dom';

import HomeImage from '../../../images/home.svg';

import useStyles from './home-jss';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.page} text-center`}>
      <h4 className='title'>
        No one has ever become poor by <span>giving.</span>{' '}
      </h4>

      <p className='paragraph mx-auto mt-3'>
        Who will care about poor people if the healthcare system is weak and
        there are no charities?
      </p>

      <div className='mt-4'>
        <Link className='button-primary' to='/donations/add'>
          Start helping
        </Link>
      </div>

      <div className='mt-5'>
        <img className='img img-fluid' src={HomeImage} alt='Home' />
      </div>
    </div>
  );
};

export default Home;
