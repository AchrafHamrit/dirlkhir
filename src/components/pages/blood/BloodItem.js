import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const BloodItem = (props) => {
  const { post, setPhone } = props;

  const { blood_type, city, wilaya, username, phone } = post;

  const showAndSetPhone = () => {
    setPhone(phone);
  };

  return (
    <div className='postitem card-shadow px-3 py-4 mb-4'>
      <div className='row'>
        <div className='col-12 col-md-2 mb-2 mb-md-0 align-self-center text-center'>
          <div className='circle mx-auto'>
            <p>{blood_type}</p>
          </div>
        </div>

        <div className='col-12 col-md-7 mb-2 mb-md-0 align-self-center text-md-left'>
          <div className='name'>{username}</div>
          <div className='details'>
            <div className='type mr-2'>
              <span className='strong'>Type</span> {blood_type}
            </div>
            <div className='location mr-2'>
              <span className='strong'>Location</span> {city}, {wilaya}
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3 mb-2 mb-md-0 align-self-center'>
          <button className='button-primary' onClick={showAndSetPhone}>
            <FontAwesomeIcon className='mr-2' icon={faPhoneAlt} />
            Phone
          </button>
        </div>
      </div>
    </div>
  );
};

export default BloodItem;
