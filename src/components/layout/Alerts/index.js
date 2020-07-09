import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import useStyles from './alerts-jss';

const Alerts = ({ alerts }) => {
  const classes = useStyles();

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`${classes.alert} card-shadow text-center`}
      >
        <FontAwesomeIcon className='icon mr-2' icon={faInfoCircle} />
        {alert.msg}
      </div>
    ))
  );
};

const mapSateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapSateToProps, {})(Alerts);
