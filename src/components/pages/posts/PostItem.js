import React from 'react';
import { Link } from 'react-router-dom';

import formatedDate from '../../../utils/formatedDate';

import NoImage from '../../../images/no-image.svg';

const PostItem = (props) => {
  const { post, type } = props;

  const { id, title, content, city, wilaya, createdAt, urgent, images } = post;

  return (
    <div className='postitem postitem-card p-3 mb-4'>
      <div className='row'>
        <div className='col-12 col-md-3'>
          <Link
            to={`/${
              type === 1 || type === '1' ? 'donations' : 'requests'
            }/${id}`}
          >
            <img
              className='img img-fluid img-rounded-corners'
              src={images && images.length > 0 ? images[0].path : NoImage}
              alt='post'
            />
          </Link>
        </div>
        <div className='col-12 col-md-9 d-flex flex-column text-left'>
          <div className='postitem-details-top mt-3 mt-md-0'>
            <Link
              to={`/${
                type === 1 || type === '1' ? 'donations' : 'requests'
              }/${id}`}
            >
              <h5 className='title'>
                {title}{' '}
                {urgent && (
                  <span className='ml-2 badge badge-danger'>Urgent</span>
                )}
              </h5>
              <p className='description'>
                {content.length > 147
                  ? content.substring(0, 147) + '..'
                  : content}
              </p>
            </Link>
          </div>
          <div className='postitem-details-bottom mt-auto'>
            <p className='location mb-0'>{city + ', ' + wilaya}</p>
            <p className='date mb-0'>{formatedDate(createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
