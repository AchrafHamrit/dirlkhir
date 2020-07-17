import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Actions
import { getUserPostById } from '../../../../redux/actions/postActions';

// Utils
import formatedDate from '../../../../utils/formatedDate';
import { WEBSITE_NAME } from '../../../../utils/websiteData';

// Components
import Sidebar from '../../../layout/Sidebar';
import Spinner from '../../../layout/Spinner';
import DialogImage from '../../../layout/dialogs/DialogImage';

import useStyles from '../posts-jss';

const UserPostShow = (props) => {
  const classes = useStyles();

  const {
    match,
    user_post_current,
    getUserPostById,
    loading_user_posts,
  } = props;

  useEffect(() => {
    getUserPostById(match.params.id);

    //eslint-disable-next-line
  }, []);

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

  const { title, content, wilaya, city, createdAt, images } =
    user_post_current || {};

  return (
    <div>
      <Helmet>
        <title>{`${WEBSITE_NAME} | ${
          loading_user_posts ? 'Loading...' : title || 'Not found'
        }`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        {loading_user_posts ? (
          <Spinner />
        ) : !user_post_current ? (
          <div className='row'>
            <div className='col'>Not found</div>
          </div>
        ) : (
          <div className='content'>
            <div className='row'>
              <div className='col-12 col-lg-9'>
                <h6 className='text-left'>
                  <Link className='link-primary' to={`/posts`}>
                    <FontAwesomeIcon className='mr-1' icon={faArrowLeft} /> Your
                    posts
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
                  </div>
                </div>
              </div>
              <div className='d-none d-lg-block col-12 col-lg-3'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}

        <DialogImage show={showImage} image={image} onHide={handleHideImage} />
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  user_post_current: state.posts.user_post_current,
  loading_user_posts: state.posts.loading_user_posts,
});

export default connect(mapSateToProps, {
  getUserPostById,
})(UserPostShow);
