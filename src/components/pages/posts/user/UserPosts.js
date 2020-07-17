import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Actions
import { getUserPosts } from '../../../../redux/actions/postActions';

// Utils
import { WEBSITE_NAME } from '../../../../utils/websiteData';
import formatedDate from '../../../../utils/formatedDate';

// Components
import Spinner from '../../../layout/Spinner';

import useStyles from '../posts-jss';

const UserPosts = (props) => {
  const classes = useStyles();

  const { user_posts, loading_user_posts, getUserPosts } = props;

  useEffect(() => {
    getUserPosts();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Your posts`}</title>
      </Helmet>
      <div className={`${classes.page} user-posts card-shadow text-center`}>
        <h3 className='title'>Your posts</h3>
        <h6 className='subtitle'>Here some people need drugs or equipments</h6>

        {user_posts !== null && !loading_user_posts ? (
          user_posts.length < 1 ? (
            <div className='row mt-5'>
              <div className='col text-center'>
                <h5>No posts found!</h5>
              </div>
            </div>
          ) : (
            <div className='row mt-4'>
              <div className='col-12'>
                <div className='table-responsive'>
                  <table className='table text-left'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user_posts.map((post) => (
                        <PostItem key={post.id} post={post} />
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
  user_posts: state.posts.user_posts,
  loading_user_posts: state.posts.loading_user_posts,
});

export default connect(mapSateToProps, {
  getUserPosts,
})(UserPosts);

const PostItem = (props) => {
  const { post } = props;

  const { id, type, title, category, createdAt, isApproved } = post;
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Link className='link-primary' to={`/posts/${id}`}>
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
      <td>{isApproved ? 'Approved' : 'Pending'}</td>
    </tr>
  );
};
