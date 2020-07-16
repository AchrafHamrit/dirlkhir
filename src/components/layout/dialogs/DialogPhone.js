import React from 'react';
import { Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import Spinner from '../Spinner';

import useStyles from './dialogs-jss';

const DialogPhone = (props) => {
  const classes = useStyles();

  const { show, phone, onHide, loading } = props;

  return (
    <>
      <Modal
        className={`${classes.dialog}`}
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Body className='text-center py-4'>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <FontAwesomeIcon className='icon mr-2' icon={faPhoneAlt} />
              <h5 className='title'>Phone number</h5>
              <span className='phone-number'>{phone}</span>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DialogPhone;
