import React from 'react';
import Helmet from 'react-helmet';

// Utils
import { WEBSITE_NAME } from '../../../utils/websiteData';

// Images
import Home01 from '../../../images/home-01.svg';
import DonationsIcon from '../../../images/donations-icon.svg';
import RequestsIcon from '../../../images/requests-icon.svg';
import BloodIcon from '../../../images/blood-icon.svg';

import useStyles from './home-jss';

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Donations website`}</title>
      </Helmet>
      <div className={`${classes.page}`}>
        <div className='row py-5 align-items-center'>
          <div className='col-12 col-lg-6 text-center text-lg-left'>
            <h1 className='title mx-auto mx-lg-0 '>
              The platform to support those in need.
            </h1>

            <p className='paragraph mx-auto mx-lg-0 mt-3'>
              <span>Give help</span> to individuals, charities and organizations
            </p>
          </div>
          <div className='col-12 col-lg-6 mt-lg-5 mt-5 mt-lg-0 text-center'>
            <img className='img img-fluid' src={Home01} alt='Home' />
          </div>
        </div>

        <div className='row pt-5'>
          <div className='col-12 col-lg-6 text-center text-lg-left'>
            <h3 className='title mb-3 mx-auto mx-lg-0 '>
              What does <span className='brand'>Dirlkhir</span> provide?
            </h3>
          </div>
        </div>

        <div className='features row py-5 text-center text-lg-left'>
          <div className='col-12 col-lg-3'>
            <div>
              <img
                className='img img-fluid mb-3'
                src={DonationsIcon}
                alt='Home'
              />
              <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>Donations</h5>
              <p className='description mb-5 mx-auto mx-lg-0'>
                Find those in need of money, tools or resources
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-3'>
            <div>
              <img
                className='img img-fluid mb-3'
                src={RequestsIcon}
                alt='Home'
              />
              <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>Requests</h5>
              <p className='description mb-5 mx-auto mx-lg-0'>
                Ask for help from people regardless of your location
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-3'>
            <div>
              <img className='img img-fluid mb-3' src={BloodIcon} alt='Home' />
              <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>Blood donors</h5>
              <p className='description mb-5 mx-auto mx-lg-0'>
                Match patients with suitable blood donors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
