import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

// Actions
import {
  getStates,
  getStateCities,
  clearCities,
} from '../../../../redux/actions/locationActions';
import {
  getRequests,
  getCategories,
} from '../../../../redux/actions/postActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// Components
import Sidebar from '../../../layout/Sidebar';
import PostItem from '../PostItem';

import useStyles from '../posts-jss';

const Requests = (props) => {
  const classes = useStyles();

  const {
    requests,
    categories,
    wilayas,
    cities,
    getRequests,
    getCategories,
    getStates,
    getStateCities,
    clearCities,
    loading_states,
    loading_state_cities,
    loading,
    loading_categories,
  } = props;

  const [post_search, setSearch] = useState({
    keywords: '',
    category: 0,
    wilaya: 0,
    city: 0,
  });

  const { keywords, category, wilaya, city } = post_search;

  useEffect(() => {
    getRequests(keywords, category, wilaya, city);
    getCategories();
    getStates();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (wilaya !== 0 && wilaya !== '0') {
      getStateCities(wilaya);
    } else {
      clearCities();
    }

    setSearch({ ...post_search, city: 0 });

    //eslint-disable-next-line
  }, [wilaya]);

  const onChange = (e) =>
    setSearch({ ...post_search, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getRequests(keywords, category, wilaya, city);
  };

  return (
    <div className={`${classes.page} card-shadow text-center`}>
      <h3 className='title'>Requests</h3>
      <h6 className='subtitle'>Here some people need drugs or equipments</h6>

      <div className='row'>
        <div className='col-12'>
          <Link
            to={`/requests/add`}
            className='button-primary d-inline-block mt-2'
          >
            <FontAwesomeIcon className='mr-2' icon={faPlusCircle} />
            Add a Request
          </Link>
        </div>
      </div>
      <div className='search-form card-shadow mt-4 pt-4'>
        <div className='d-lg-none mb-1'>
          <a
            className='button-light'
            data-toggle='collapse'
            href='#collapse-form'
            role='button'
            aria-expanded='false'
            aria-controls='collapse-form'
          >
            <FontAwesomeIcon className='mr-2' icon={faSearch} />
            Show Filter
          </a>
        </div>

        <form onSubmit={onSubmit} className='collapse mt-3' id='collapse-form'>
          <div className='form-row align-items-center justify-content-center'>
            <div className='col-12 col-lg-3'>
              <input
                name='keywords'
                value={keywords}
                onChange={onChange}
                type='text'
                className='input-text mb-2'
                placeholder='Search..'
              />
            </div>

            <div className='col-12 col-lg-2'>
              <select
                name='category'
                value={category}
                onChange={onChange}
                className='custom-select input-select input-text mb-2'
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

            <div className='col-12 col-lg-2'>
              <select
                name='wilaya'
                value={wilaya}
                onChange={onChange}
                className='custom-select input-select input-text mb-2'
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

            <div className='col-12 col-lg-2'>
              <select
                name='city'
                value={city}
                onChange={onChange}
                className='custom-select input-select input-text mb-2'
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

            <div className='col-12 col-lg-1'>
              <button type='submit' className='button-primary mb-2'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {requests !== null && !loading ? (
        <div className='content mt-5'>
          <div className='row'>
            <div className='col-12 col-lg-9'>
              <h6 className='text-left'>Requests ({requests.length})</h6>
              <div className='posts mt-3'>
                {requests.length < 1 ? (
                  <div className='no-requests mt-5'>
                    <h5>No requests found!</h5>
                    <p>
                      Remember to check the spelling of the keyword entered.
                    </p>
                  </div>
                ) : (
                  requests.map((post) => (
                    <PostItem key={post.id} post={post} type={2} />
                  ))
                )}
              </div>
            </div>
            <div className='d-none d-lg-block col-12 col-lg-3'>
              <Sidebar />
            </div>
          </div>
        </div>
      ) : (
        <div className='content text-center mt-5'>Spinner</div>
      )}
    </div>
  );
};

const mapSateToProps = (state) => ({
  requests: state.posts.requests,
  categories: state.posts.categories,
  loading: state.posts.loading,
  loading_categories: state.posts.loading_categories,
  wilayas: state.locations.states,
  cities: state.locations.cities,
  loading_states: state.locations.loading_states,
  loading_state_cities: state.locations.loading_state_cities,
});

export default connect(mapSateToProps, {
  getStates,
  getStateCities,
  clearCities,
  setAlert,
  getRequests,
  getCategories,
})(Requests);
