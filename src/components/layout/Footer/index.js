import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import useStyles from './footer-jss';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={`${classes.footer} `}>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <div className='social'>
              <a
                href='https://github.com/AchrafHamrit/dirlkhir'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-3'
              >
                <FontAwesomeIcon className='icon' icon={faGithub} />
              </a>
            </div>
            <div className='message mt-3 mx-auto'>
              <p>
                As part of our common humanity, we could use some of our
                resources to help people who are not meeting their basic needs.
              </p>
            </div>

            <div className='Copyright mx-auto'>
              <p>Copyright &copy; 2020 Dirlkhir</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
