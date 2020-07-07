import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import useStyles from './alerts-jss';

const Alerts = () => {
  const classes = useStyles();

  return '';

  return (
    <div className={`${classes.alert} card-shadow text-center`}>
      <FontAwesomeIcon className='icon mr-2' icon={faInfoCircle} />
      Alert message
    </div>
  );
};

export default Alerts;
