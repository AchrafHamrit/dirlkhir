import React from 'react';
import { Modal } from 'react-bootstrap';

import useStyles from './dialogs-jss';

const DialogImage = (props) => {
  const classes = useStyles();

  const { show, image, onHide } = props;

  return (
    <>
      <Modal
        className={`${classes.dialog}`}
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Body className='text-center py-4'>
          <img className='img img-fluid mb-2' src={image} alt={image} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DialogImage;
