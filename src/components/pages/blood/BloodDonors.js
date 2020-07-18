import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Actions
import { getStates } from '../../../redux/actions/locationActions';
import {
  getBloodDonors,
  clearErrors,
} from '../../../redux/actions/bloodActions';
import { setAlert } from '../../../redux/actions/alertActions';

// Utils
import { WEBSITE_NAME } from '../../../utils/websiteData';

// Components
import Sidebar from '../../layout/Sidebar';
import Spinner from '../../layout/Spinner';
import BloodItem from './BloodItem';
import DialogPhone from '../../layout/dialogs/DialogPhone';

import useStyles from './blood-jss';

const BloodDonors = (props) => {
  const classes = useStyles();

  const {
    wilayas,
    donors,
    error,
    loading_states,
    loading,
    getStates,
    getBloodDonors,
    clearErrors,
    setAlert,
  } = props;

  const [post_search, setSearch] = useState({
    blood_type: 0,
    wilaya: 0,
  });

  const { blood_type, wilaya } = post_search;

  useEffect(() => {
    getStates();
    getBloodDonors(wilaya, blood_type);

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error]);

  const blood_types = [
    { id: '1', code: 'A+' },
    { id: '2', code: 'A-' },
    { id: '3', code: 'B+' },
    { id: '4', code: 'B-' },
    { id: '5', code: 'AB+' },
    { id: '6', code: 'AB-' },
    { id: '7', code: 'O+' },
    { id: '8', code: 'O-' },
  ];

  const [phone, setPhone] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  // const handleShowPhone = () => {
  //   setPhone(phone);
  // };
  const handleHidePhone = () => {
    setShowPhone(false);
    setPhone(null);
  };

  useEffect(() => {
    if (phone) {
      setShowPhone(true);
    }
    //eslint-disable-next-line
  }, [phone]);

  const onChange = (e) =>
    setSearch({ ...post_search, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    getBloodDonors(wilaya, blood_type);
  };

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Blood donors`}</title>
      </Helmet>
      <div className={`${classes.page} card-shadow text-center`}>
        <h3 className='title'>Blood Donors</h3>
        <h6 className='subtitle'>Match patients with suitable blood donors</h6>
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
                <select
                  id='blood_type'
                  name='blood_type'
                  value={blood_type}
                  onChange={onChange}
                  className='custom-select input-select input-text mb-2'
                >
                  <option value={0}>Select a Blood type</option>
                  {blood_types !== null &&
                    blood_types.length > 0 &&
                    blood_types.map((type) => (
                      <option key={type.code} value={type.id}>
                        {type.code}
                      </option>
                    ))}
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

              <div className='col-12 col-lg-1'>
                <button type='submit' className='button-primary mb-2'>
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='content mt-5'>
          <div className='row'>
            <div className='col-12 col-lg-9'>
              <h6 className='text-left'>
                Donors ({donors ? donors.length : 0})
              </h6>
              {donors !== null && !loading ? (
                <div className='donors mt-3'>
                  {donors.length < 1 ? (
                    <div className='no-donors mt-5'>
                      <h5>No blood donors found!</h5>
                    </div>
                  ) : (
                    donors.map((post) => (
                      <BloodItem
                        key={post.id}
                        post={post}
                        setPhone={setPhone}
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
        <DialogPhone show={showPhone} phone={phone} onHide={handleHidePhone} />
      </div>
    </>
  );
};

const mapSateToProps = (state) => ({
  donors: state.blood.donors,
  loading: state.blood.loading,
  error: state.blood.error,
  wilayas: state.locations.states,
  loading_states: state.locations.loading_states,
});

export default connect(mapSateToProps, {
  getStates,
  getBloodDonors,
  clearErrors,
  setAlert,
})(BloodDonors);
