import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Actions
import {
  getPendingPosts,
  approvePost,
  declinePost,
  clearErrors,
} from '../../../../redux/actions/postActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../../utils/websiteData';
import formatedDate from '../../../../utils/formatedDate';

// Components
import Spinner from '../../../layout/Spinner';

import useStyles from './pending-jss';

const PendingPosts = (props) => {
  const classes = useStyles();

  const {
    pending_posts,
    loading_pending,
    error,
    getPendingPosts,
    approvePost,
    declinePost,
    clearErrors,
    setAlert,
  } = props;

  useEffect(() => {
    getPendingPosts();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error]);

  const approvePostHandle = async (id) => {
    await approvePost(id);
    getPendingPosts();
  };

  const declinePostHandle = async (id) => {
    await declinePost(id);
    getPendingPosts();
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Pending posts`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        <h3 className='title'>Pending posts</h3>
        <h6 className='subtitle'>Manage the posts that need your approval</h6>

        {pending_posts !== null && !loading_pending ? (
          pending_posts.length < 1 ? (
            <div className='row mt-5'>
              <div className='col text-center'>No pending posts!</div>
            </div>
          ) : (
            <div className='row mt-4'>
              <div className='col-12'>
                <div className='table-responsive'>
                  <table className='table text-left'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Date</th>
                        <th scope='col'></th>
                      </tr>
                    </thead>
                    <tbody>
                      {pending_posts.map((post) => (
                        <PendingPostItem
                          approvePost={approvePostHandle}
                          declinePost={declinePostHandle}
                          key={post.id}
                          post={post}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className='row mt-4'>
            <div className='col text-center'>
              <Spinner />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapSateToProps = (state) => ({
  pending_posts: state.posts.pending_posts,
  loading_pending: state.posts.loading_pending,
  error: state.posts.error,
});

export default connect(mapSateToProps, {
  getPendingPosts,
  approvePost,
  declinePost,
  clearErrors,
  setAlert,
})(PendingPosts);

const PendingPostItem = (props) => {
  const { post, approvePost, declinePost } = props;

  const { id, type, username, title, category, createdAt } = post;
  return (
    <tr>
      <td>{id}</td>
      <td>{username != null && username} </td>
      <td>
        <Link className='link-primary' to={`/pending/${id}`}>
          {title != null && title}{' '}
        </Link>
        <span
          className={`type ${
            parseInt(type) === 1 ? 'bg-success' : 'bg-primary'
          }`}
        >
          {parseInt(type) === 1 ? 'Donation' : 'Request'}
        </span>
      </td>
      <td>{category != null && category}</td>
      <td>{createdAt != null && formatedDate(createdAt)}</td>
      <td>
        <div className='actions text-right'>
          <a
            href='#approve'
            title='Approve'
            className='mr-2'
            onClick={() => approvePost(id)}
          >
            <FontAwesomeIcon className='icon icon-approve' icon={faCheck} />
          </a>
          <a href='#decline' title='Decline' onClick={() => declinePost(id)}>
            <FontAwesomeIcon className='icon icon-decline' icon={faTimes} />
          </a>
        </div>
      </td>
    </tr>
  );
};
