import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

// Actions
import {
  getStates,
  getStateCities,
  clearCities,
} from '../../../../redux/actions/locationActions';
import {
  getDonations,
  getCategories,
} from '../../../../redux/actions/postActions';
import { setAlert } from '../../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../../utils/websiteData';

// Components
import Sidebar from '../../../layout/Sidebar';
import Spinner from '../../../layout/Spinner';
import PostItem from '../PostItem';

import useStyles from '../posts-jss';

const Donations = (props) => {
  const classes = useStyles();

  const {
    donations,
    categories,
    wilayas,
    cities,
    getDonations,
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
    getDonations(keywords, category, wilaya, city);
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
    getDonations(keywords, category, wilaya, city);
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Donations`}</title>
      </Helmet>

      <div className={`${classes.page} card-shadow text-center`}>
        <h3 className='title'>Donations</h3>
        <h6 className='subtitle'>Here some people need drugs or equipments</h6>

        <div className='row'>
          <div className='col-12'>
            <Link
              to={`/donations/add`}
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

          <form
            onSubmit={onSubmit}
            className='collapse mt-3'
            id='collapse-form'
          >
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

        {donations !== null && !loading ? (
          <div className='content mt-5'>
            <div className='row'>
              <div className='col-12 col-lg-9'>
                <h6 className='text-left'>Donations ({donations.length})</h6>
                <div className='posts mt-3'>
                  {donations.length < 1 ? (
                    <div className='no-donations mt-5'>
                      <h5>No donations found!</h5>
                    </div>
                  ) : (
                    donations.map((post) => (
                      <PostItem key={post.id} post={post} type={1} />
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
          <div className='content text-center mt-5'>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

const mapSateToProps = (state) => ({
  donations: state.posts.donations,
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
  getDonations,
  getCategories,
})(Donations);
