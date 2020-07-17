import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Actions
import { getRequestById } from '../../../../redux/actions/postActions';
import {
  getUserPhone,
  clearUserPhone,
  sendMessage,
} from '../../../../redux/actions/messageActions';

// Utils
import formatedDate from '../../../../utils/formatedDate';
import { WEBSITE_NAME } from '../../../../utils/websiteData';

// Components
import Sidebar from '../../../layout/Sidebar';
import Spinner from '../../../layout/Spinner';
import DialogPhone from '../../../layout/dialogs/DialogPhone';
import DialogMessage from '../../../layout/dialogs/DialogMessage';
import DialogImage from '../../../layout/dialogs/DialogImage';

import useStyles from '../posts-jss';

const RequestShow = (props) => {
  const classes = useStyles();

  const {
    match,
    isAuthenticated,
    request,
    getRequestById,
    user_phone,
    getUserPhone,
    clearUserPhone,
    sendMessage,
    loading,
    loading_send,
    loading_phone,
    // error,
    error_send,
  } = props;

  useEffect(() => {
    getRequestById(match.params.id);

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user_phone) {
      setPhone(user_phone.phone);
      setShowPhone(true);
    }
    //eslint-disable-next-line
  }, [user_phone]);

  const [phone, setPhone] = useState(null);
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    getUserPhone(request.user_id);
  };

  const handleHidePhone = () => {
    setShowPhone(false);
    clearUserPhone();
  };

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowMessage = () => {
    if (!isAuthenticated) return;
    setShowMessage(true);
  };

  const handleMessageOnChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandle = async () => {
    if (!message) return;
    if (request.user_id === null) return;
    await sendMessage({
      user_Reciever: request.user_id,
      content: message,
    });
    if (!error_send) {
      setMessage('');
      setShowMessage(false);
    }
  };

  const handleHideMessage = () => {
    setShowMessage(false);
    setMessage('');
  };

  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = (e) => {
    const imageSrc = e.target.src;
    if (imageSrc && imageSrc !== '') {
      setImage(imageSrc);
      setShowImage(true);
    }
  };

  const handleHideImage = () => {
    setShowImage(false);
    setImage(null);
  };

  const { title, content, wilaya, city, createdAt, images } = request || {};

  return (
    <div>
      <Helmet>
        <title>{`${WEBSITE_NAME} | ${
          loading ? 'Loading...' : title || 'Not found'
        }`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        {loading ? (
          <Spinner />
        ) : !request ? (
          <div className='row'>
            <div className='col'>Not found</div>
          </div>
        ) : (
          <div className='content'>
            <div className='row'>
              <div className='col-12 col-lg-9'>
                <h6 className='text-left'>
                  <Link className='link-primary' to={`/requests`}>
                    <FontAwesomeIcon className='mr-1' icon={faArrowLeft} />{' '}
                    Requests
                  </Link>
                </h6>

                <div className='post-content mt-4'>
                  <h3 className='title'>{title}</h3>

                  <div className='description mt-3 mx-auto'>
                    <h6 className='subtitle mb-2'>
                      {/* <FontAwesomeIcon className='icon mr-2' icon={faFileAlt} /> */}
                      Description
                    </h6>
                    <p className='mb-1'>{content}</p>
                  </div>

                  <p className='mb-1'>
                    <span className='date'>{formatedDate(createdAt)}</span>
                  </p>

                  <div className='pictures mt-4'>
                    <div className='row justify-content-center align-items-center'>
                      {images !== null && images.length > 0 ? (
                        images.map((image) => (
                          <div
                            key={image.id}
                            className='col-12 col-sm-6 col-md-4 col-lg-3'
                          >
                            <img
                              className='img img-fluid img-rounded-corners mb-2'
                              src={image.path}
                              alt={image.name}
                              onClick={handleShowImage}
                            />
                          </div>
                        ))
                      ) : (
                        <div className='col'>No pictures</div>
                      )}
                    </div>
                  </div>

                  <div className='contact-details text-center mt-4'>
                    <FontAwesomeIcon
                      className='icon mb-2'
                      icon={faMapMarkerAlt}
                    />
                    <div className='location'>
                      <h6>{`${wilaya}, ${city}`}</h6>
                    </div>

                    <h5 className='title mb-4'>You want to help?</h5>

                    <div className='mt-4'>
                      <div className='d-block d-md-inline-block mb-2 mr-md-2'>
                        <button
                          className='button-primary'
                          onClick={handleShowPhone}
                        >
                          <FontAwesomeIcon className='mr-2' icon={faPhoneAlt} />
                          Phone call
                        </button>
                      </div>
                      <div className='d-inline d-md-inline-block'>
                        <button
                          className='button-transparent'
                          disabled={!isAuthenticated}
                          onClick={handleShowMessage}
                        >
                          <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-none d-lg-block col-12 col-lg-3'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
        <DialogPhone
          show={showPhone}
          phone={phone}
          onHide={handleHidePhone}
          loading={loading_phone}
        />

        <DialogMessage
          show={showMessage}
          message={message}
          loadingSend={loading_send}
          handleMessageOnChange={handleMessageOnChange}
          sendMessage={sendMessageHandle}
          onHide={handleHideMessage}
        />

        <DialogImage show={showImage} image={image} onHide={handleHideImage} />
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  request: state.posts.request,
  loading: state.posts.loading,
  user_phone: state.messages.user_phone,
  loading_phone: state.messages.loading_phone,
  loading_send: state.messages.loading_send,
  error_send: state.messages.error_send,
});

export default connect(mapSateToProps, {
  getRequestById,
  getUserPhone,
  clearUserPhone,
  sendMessage,
})(RequestShow);
