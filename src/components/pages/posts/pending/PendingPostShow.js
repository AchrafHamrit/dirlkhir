import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostContext from '../../../context/post/postContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faInfoCircle,
  faFileAlt,
  faImage,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import formatedDate from '../../../utils/formatedDate';

import Sidebar from '../posts/Sidebar';

import useStyles from '../posts/posts-jss';

const PendingPostShow = ({ match }) => {
  const classes = useStyles();

  const postContext = useContext(PostContext);

  const {
    pending_post_current,
    getPendingPostById,
    loading_pending,
  } = postContext;

  useEffect(() => {
    getPendingPostById(match.params.id);

    //eslint-disable-next-line
  }, []);

  if (loading_pending) return 'spinner';
  else {
    if (!pending_post_current) return 'not found';
  }

  const {
    title,
    content,
    category,
    wilaya,
    city,
    createdAt,
    images,
    reference,
    views,
  } = pending_post_current;

  return (
    <div className={`${classes.page} card-shadow text-center`}>
      <div className='content'>
        <div className='row'>
          <div className='text-left col-12 col-lg-9'>
            <h6>
              <Link className='link-primary' to={`/pending`}>
                <FontAwesomeIcon className='mr-1' icon={faArrowLeft} /> Pending
                posts
              </Link>
            </h6>
            <div className='post-content mt-3'>
              <h3 className='title'>
                <span className='mr-2'>{title}</span>
              </h3>
              <div className='details mt-4'>
                <h5 className='subtitle mb-2'>
                  <FontAwesomeIcon className='icon mr-2' icon={faInfoCircle} />
                  Details
                </h5>
                <p className='mb-1'>
                  Category{'  '} <span className='value'>{category}</span>
                </p>
                <p className='mb-1'>
                  Reference{'  '} <span className='value'>{reference}</span>
                </p>
                <p className='mb-1'>
                  Views{'  '} <span className='value'>{views}</span>
                </p>
                <p className='mb-1'>
                  Date{'  '}{' '}
                  <span className='value'>{formatedDate(createdAt)}</span>
                </p>
              </div>
              <div className='description mt-4'>
                <h5 className='subtitle mb-2'>
                  <FontAwesomeIcon className='icon mr-2' icon={faFileAlt} />
                  Description
                </h5>
                <p className='mb-1'>
                  <span className='value'>{content}</span>
                </p>
              </div>
              <div className='pictures mt-4'>
                <h5 className='subtitle mb-2'>
                  <FontAwesomeIcon className='icon mr-2' icon={faImage} />
                  Pictures
                </h5>
                <div className='row'>
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
                        />
                      </div>
                    ))
                  ) : (
                    <div className='col'>No pictures</div>
                  )}
                </div>
              </div>

              <div className='contact-details card-shadow text-center mt-4'>
                <FontAwesomeIcon className='icon mb-2' icon={faMapMarkerAlt} />
                <div className='location'>
                  <h6>{`${wilaya}, ${city}`}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='d-none d-lg-block col-12 col-lg-3'>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPostShow;
