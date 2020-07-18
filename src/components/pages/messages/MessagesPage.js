import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Actions
import {
  getConversations,
  clearErrors,
} from '../../../redux/actions/messageActions';
import { setAlert } from '../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../utils/websiteData';

// Components
import Spinner from '../../layout/Spinner';
import Sidebar from '../../layout/Sidebar';
import MessageItem from './MessageItem';

import useStyles from './messages-jss';

const MessagesPage = (props) => {
  const classes = useStyles();

  const {
    conversations,
    loading,
    error,
    getConversations,
    clearErrors,
    setAlert,
  } = props;

  useEffect(() => {
    getConversations();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error]);

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
              Messages ({conversations !== null && conversations.length})
            </h6>
            {conversations !== null && !loading ? (
              <div className='messages mt-3'>
                {conversations.length < 1 ? (
                  <div className='no-requests mt-5'>
                    <h5>No messages!</h5>
                  </div>
                ) : (
                  conversations.map((conversation) => (
                    <MessageItem
                      key={conversation.id}
                      conversation={conversation}
                    />
                  ))
                )}
              </div>
            ) : (
              <div className='content text-center mt-5'>
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
  conversations: state.messages.conversations,
  loading: state.messages.loading,
  error: state.messages.error,
});

export default connect(mapSateToProps, {
  getConversations,
  clearErrors,
  setAlert,
})(MessagesPage);
