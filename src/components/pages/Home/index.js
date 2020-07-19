import React from 'react';
import Helmet from 'react-helmet';

// Utils
import { WEBSITE_NAME } from '../../../utils/websiteData';

// Images
import Home01 from '../../../images/home-01.svg';
import Home02 from '../../../images/home-02.svg';
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

        <div className='features py-5'>
          <div className='row'>
            <div className='col-12 col-lg-6 text-center text-lg-left'>
              <h3 className='title mb-5 mx-auto mx-lg-0 '>
                What does <span className='bold'>Dirlkhir</span> provide?
              </h3>
            </div>
          </div>

          <div className='row text-center text-lg-left'>
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
                <img
                  className='img img-fluid mb-3'
                  src={BloodIcon}
                  alt='Home'
                />
                <h5 className='title mb-2 mt-2 mx-auto mx-lg-0'>
                  Blood donors
                </h5>
                <p className='description mb-5 mx-auto mx-lg-0'>
                  Match patients with suitable blood donors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='our-mission py-5'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 text-center'>
              <h3 className=''>
                <img className='img img-fluid' src={Home02} alt='Home2' />
              </h3>
            </div>

            <div className='col-12 col-lg-6 text-center text-lg-left'>
              <h3 className='title mb-3 mt-4 mt-lg-0 mx-auto mx-lg-0 '>
                Our<span className='bold'> mission</span>
              </h3>

              <p className='paragraph mx-auto mx-lg-0 mt-3'>
                According to the World Health Organization, at least 400 million
                people globally do not have access to essential health services.
                <span> Dirlkhir</span> attempts to make basic health tools and
                services more accessible to these people in regards to their
                social and financial status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
