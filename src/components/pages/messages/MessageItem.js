import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

// Utils
import formatedDate from '../../../utils/formatedDate';

export const MessageItem = (props) => {
  const { conversation } = props;

  const { id, other_user, last_Message, has_new } = conversation;

  return (
    <Link to={`/messages/${id}`}>
      <div className='messageitem messageitem-card p-3 mb-4'>
        <div className='row'>
          <div className='col d-flex flex-row align-items-center text-left'>
            <div>
              <FontAwesomeIcon className='icon mr-3' icon={faUserCircle} />
            </div>
            <div>
              <span className='user d-block'>@{other_user}</span>
              <span className='message mb-0'>
                {last_Message ? last_Message.content : ''}
              </span>
              <span className='message-date mb-0'>
                {last_Message
                  ? ' - ' + formatedDate(last_Message.createdAt)
                  : ''}
              </span>
            </div>
            <div className='ml-auto'>
              {has_new ? (
                <FontAwesomeIcon className='unread-icon' icon={faCircle} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MessageItem;
