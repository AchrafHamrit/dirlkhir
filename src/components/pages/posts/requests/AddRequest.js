import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Actions
import {
  getStates,
  getStateCities,
  clearCities,
} from '../../../../redux/actions/locationActions';
import {
  addPost,
  getCategories,
  clearErrors,
} from '../../../../redux/actions/postActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../../utils/websiteData';

// Components
import Spinner from '../../../layout/Spinner';

import useStyles from '../posts-jss';

const AddRequest = (props) => {
  const classes = useStyles();

  const {
    categories,
    wilayas,
    cities,
    loading_add_post,
    loading_categories,
    error,
    loading_states,
    loading_state_cities,
    addPost,
    getCategories,
    getStates,
    getStateCities,
    clearCities,
    clearErrors,
    setAlert,
  } = props;

  const [post, setPost] = useState({
    title: '',
    category: 0,
    wilaya: 0,
    city: 0,
    content: '',
    images: null,
  });

  const { title, category, wilaya, city, content, images } = post;

  useEffect(() => {
    getCategories();
    getStates();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (wilaya !== 0 && wilaya !== '0') {
      getStateCities(wilaya);
    } else {
      clearCities();
    }

    setPost({ ...post, city: 0 });

    //eslint-disable-next-line
  }, [wilaya]);

  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onChangeImages = (e) => setPost({ ...post, images: e.target.files });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title === '') {
      setAlert('Title is empty');
      return;
    }

    if (category === 0 || category === '0') {
      setAlert('Please select a category');
      return;
    }

    if (city === 0 || city === '0') {
      setAlert('Please select a city');
      return;
    }

    if (content === '') {
      setAlert('Content is empty');
      return;
    }

    const formData = new FormData();

    formData.append('title', title);
    formData.append('post_category', category);
    formData.append('post_type', 2);
    formData.append('city', city);
    formData.append('content', content);

    if (images)
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }

    await addPost(formData);

    window.location.href = '/posts';
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Add request`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        <h3 className='title'>Add a Request</h3>
        <h6 className='subtitle'>
          Ask for help from people regardless of your location
        </h6>

        <div className='row'>
          <div className='col'>
            {' '}
            <form className='add-form mx-auto mt-4' onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  className='input-text'
                  type='text'
                  id='title'
                  name='title'
                  value={title}
                  placeholder='Title'
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <select
                  id='category'
                  name='category'
                  value={category}
                  onChange={onChange}
                  className='custom-select input-select input-text'
                >
                  {loading_categories ? (
                    <option value='0'>Loading...</option>
                  ) : (
                    <>
                      <option value='0'>All categories</option>
                      {categories !== null &&
                        categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.label}
                          </option>
                        ))}
                    </>
                  )}
                </select>
              </div>

              <div className='form-group'>
                <select
                  id='wilaya'
                  name='wilaya'
                  value={wilaya}
                  onChange={onChange}
                  className='custom-select input-select input-text'
                >
                  {loading_states ? (
                    <option value='0'>Loading...</option>
                  ) : (
                    <>
                      <option value='0'>Select a wilaya</option>
                      {wilayas !== null &&
                        wilayas.length > 0 &&
                        wilayas.map((wilaya) => (
                          <option key={wilaya.code} value={wilaya.code}>
                            {wilaya.label}
                          </option>
                        ))}
                    </>
                  )}
                </select>
              </div>

              <div className='form-group'>
                <select
                  id='city'
                  name='city'
                  value={city}
                  onChange={onChange}
                  className='custom-select input-select input-text'
                >
                  {loading_state_cities ? (
                    <option value='0'>Loading...</option>
                  ) : (
                    <>
                      <option value='0'>Select a city</option>
                      {cities !== null &&
                        cities.length > 0 &&
                        cities.map((city) => (
                          <option key={city.code} value={city.id}>
                            {city.label}
                          </option>
                        ))}
                    </>
                  )}
                </select>
              </div>

              <div className='form-group'>
                <textarea
                  className='input-text'
                  id='content'
                  name='content'
                  value={content}
                  placeholder='Content'
                  onChange={onChange}
                  rows='3'
                ></textarea>
              </div>

              <div className='form-group'>
                <input
                  id='images'
                  type='file'
                  name='images'
                  onChange={onChangeImages}
                  multiple
                />
                <label htmlFor='images'>
                  Choose Images ({images ? images.length : 0})
                </label>
              </div>
              {loading_add_post ? (
                <Spinner />
              ) : (
                <input
                  type='submit'
                  value='Add request'
                  className='button-primary mt-3'
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapSateToProps = (state) => ({
  categories: state.posts.categories,
  loading_add_post: state.posts.loading_add_post,
  loading_categories: state.posts.loading_categories,
  error: state.posts.error,
  wilayas: state.locations.states,
  cities: state.locations.cities,
  loading_states: state.locations.loading_states,
  loading_state_cities: state.locations.loading_state_cities,
});

export default connect(mapSateToProps, {
  addPost,
  getCategories,
  clearErrors,
  getStates,
  getStateCities,
  clearCities,
  setAlert,
})(AddRequest);
