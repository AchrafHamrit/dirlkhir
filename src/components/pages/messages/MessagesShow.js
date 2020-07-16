import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faUserCircle,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

// Actions
import {
  getConversationById,
  sendMessage,
  clearErrors,
} from '../../../redux/actions/messageActions';
import { setAlert } from '../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../utils/websiteData';
import formatedDate from '../../../utils/formatedDate';

// Components
import Sidebar from '../../layout/Sidebar';
import Spinner from '../../layout/Spinner';

import useStyles from './messages-jss';

const MessagesShow = (props) => {
  const classes = useStyles();

  const {
    match,
    loading,
    loading_send,
    conversation_current,
    getConversationById,
    sendMessage,
    clearErrors,
    error_send,
    error,
    setAlert,
  } = props;

  useEffect(() => {
    getConversationById(match.params.id);

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error]);

  const [message, setMessage] = useState('');
  const handleMessageOnChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandle = async () => {
    if (!message) {
      setAlert('Message is empty');
      return;
    }
    if (conversation_current.other_user === null) return;

    await sendMessage({
      user_Reciever: conversation_current.other_user.id,
      content: message,
    });

    if (!error_send) {
      getConversationById(match.params.id);
      setMessage('');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Messages`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        <h3 className='title'>Messages</h3>
        <h6 className='subtitle'>Here you can find your messages</h6>
      </div>

      <div className={`${classes.page} card-shadow text-center`}>
        <div className='row'>
          <div className='col-12 col-lg-9'>
            <h6 className='text-left'>
              <Link className='link-primary' to={`/messages`}>
                <FontAwesomeIcon className='mr-1' icon={faArrowLeft} /> Messages
              </Link>
            </h6>
            {conversation_current !== null && !loading ? (
              <>
                <div className='conversation-messages mt-3'>
                  <div className='other-user-details card-shadow p-3 mb-4'>
                    <div>
                      <FontAwesomeIcon className='icon' icon={faUserCircle} />
                    </div>

                    <span className='username d-block'>
                      @
                      {conversation_current.other_user !== null &&
                        conversation_current.other_user.username}
                    </span>
                  </div>

                  {conversation_current.messages.length < 1 ? (
                    <div className='no-messages mt-5'>
                      <h5>No messages!</h5>
                    </div>
                  ) : (
                    <>
                      <div className='messages py-3 mb-4'>
                        {conversation_current.messages.map((message) => (
                          <div
                            className={`message message-${
                              message.isSent ? 'right' : 'left'
                            }`}
                            key={message.id}
                          >
                            <div className='d-inline-block'>
                              {!message.isSent && (
                                <FontAwesomeIcon
                                  className='icon mr-2'
                                  icon={faUserCircle}
                                />
                              )}
                            </div>
                            <div className='d-inline-block'>
                              <div className='content'>{message.content}</div>
                              <div className='date'>
                                {formatedDate(message.createdAt)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className='message-form p-3'>
                  <div className='row'>
                    <div className='col'>
                      <textarea
                        className='form-control message-input'
                        rows='3'
                        placeholder='Your message..'
                        value={message}
                        disabled={loading_send}
                        onChange={handleMessageOnChange}
                      />

                      <button
                        className='button-primary mt-3'
                        disabled={loading_send}
                        onClick={sendMessageHandle}
                      >
                        {' '}
                        <FontAwesomeIcon className='mr-2' icon={faPaperPlane} />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className='text-center mt-5'>
                <Spinner />
              </div>
            )}
          </div>
          <div className='d-none d-lg-block col-12 col-lg-3'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

const mapSateToProps = (state) => ({
  conversation_current: state.messages.conversation_current,
  loading: state.messages.loading,
  loading_send: state.messages.loading_send,
  error: state.messages.error,
  error_send: state.messages.error_send,
});

export default connect(mapSateToProps, {
  getConversationById,
  sendMessage,
  clearErrors,
  setAlert,
})(MessagesShow);
