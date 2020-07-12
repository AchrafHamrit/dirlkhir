import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import {
  getStates,
  getStateCities,
  clearCities,
} from '../../../redux/actions/locationActions';
import {
  updateProfile,
  updatePassword,
  loadProfile,
  clearErrors,
} from '../../../redux/actions/authActions';
import { setAlert } from '../../../redux/actions/alertActions';

// Components
import Sidebar from '../../layout/Sidebar';
import Spinner from '../../layout/Spinner';

import useStyles from './profile-jss';

const Profile = (props) => {
  const {
    profile,
    wilayas,
    cities,
    error,
    loading_profile,
    getStates,
    getStateCities,
    loading_states,
    loading_state_cities,
    clearCities,
    clearErrors,
    setAlert,
    loadProfile,
    updateProfile,
    updatePassword,
  } = props;

  const classes = useStyles();

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

  useEffect(() => {
    getStates();
    loadProfile();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setAlert(error);
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    full_name: '',
    phone: '',
    wilaya: 0,
    city: 0,
    blood_type: 0,
    is_phone_hidden: false,
    is_sharing_blood: false,
  });

  const {
    username,
    email,
    full_name,
    phone,
    wilaya,
    city,
    blood_type,
    is_phone_hidden,
    is_sharing_blood,
  } = user;

  const [passwords, setPasswords] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const { old_password, new_password, confirm_password } = passwords;

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (wilaya !== 0 && wilaya !== '0') {
      getStateCities(wilaya);
    } else {
      clearCities();
      if (isFirstLoad) {
        setIsFirstLoad(false);
      } else {
        setUser({ ...user, city: 0 });
      }
    }
    // eslint-disable-next-line
  }, [wilaya]);

  useEffect(() => {
    if (profile) {
      setUser({
        ...user,
        ...profile,
        full_name: profile.full_name ? profile.full_name : '',
        phone: profile.phone ? profile.phone : '',
        city: profile.city ? profile.city_id : 0,
        blood_type: profile.blood_type_id ? profile.blood_type_id : 0,
      });
      if (profile.city) {
        setUser({
          ...user,
          ...profile,
          full_name: profile.full_name ? profile.full_name : '',
          phone: profile.phone ? profile.phone : '',
          wilaya: profile.city.wilaya_id,
          city: profile.city_id,
          blood_type: profile.blood_type_id ? profile.blood_type_id : 0,
        });
      }
    }

    //eslint-disable-next-line
  }, [profile]);

  const onChangeBasic = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onCheckboxChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.checked });

  const onChangePasswords = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (phone === '') {
      setAlert('Phone is empty');
      return;
    }

    await updateProfile({
      full_name,
      phone,
      city,
      blood_type,
      is_phone_hidden,
      is_sharing_blood,
    });

    if (error) window.location.reload(false);
  };

  const onSubmitPassword = (e) => {
    e.preventDefault();
    if (old_password === '') {
      setAlert('Old password is empty');
      return;
    }

    if (new_password === '' || new_password.length < 6) {
      setAlert('Password must contain at least 6 characters');
      return;
    }

    if (new_password !== confirm_password) {
      setAlert('Passwords do not match');
      return;
    }

    updatePassword({ old_password, new_password });
  };

  return (
    <div className={`${classes.page} card-shadow text-center`}>
      <h3 className='title'>Profile</h3>
      <h6 className='subtitle'>Change your phone number & other info</h6>

      <div className='content mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-9'>
            {profile !== null && !loading_profile ? (
              <>
                <h6 className='text-left'>Edit your profile</h6>

                <div className='section basic-info mt-4'>
                  <h5 className='title text-left mt-2'>
                    Basic informations & Preferences
                  </h5>

                  <form onSubmit={onSubmit}>
                    <div className='row'>
                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='username' className='float-left'>
                          Username
                        </label>
                        <input
                          className='input-text'
                          type='text'
                          id='username'
                          name='username'
                          value={username}
                          placeholder='Username'
                          readOnly
                        />
                      </div>

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='email' className='float-left'>
                          Email address
                        </label>
                        <input
                          className='input-text'
                          type='text'
                          id='email'
                          name='email'
                          value={email}
                          placeholder='Email address'
                          readOnly
                        />
                      </div>

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='full_name' className='float-left'>
                          Full name
                        </label>
                        <input
                          className='input-text'
                          type='text'
                          id='full_name'
                          name='full_name'
                          value={full_name}
                          placeholder='Full name'
                          onChange={onChangeBasic}
                        />
                      </div>

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='phone' className='float-left'>
                          Phone
                        </label>
                        <input
                          className='input-text'
                          type='text'
                          id='phone'
                          name='phone'
                          value={phone}
                          placeholder='Phone'
                          onChange={onChangeBasic}
                        />
                      </div>

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='wilaya' className='float-left'>
                          Wilaya
                        </label>
                        <select
                          id='wilaya'
                          name='wilaya'
                          value={wilaya}
                          onChange={onChangeBasic}
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

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='city' className='float-left'>
                          City
                        </label>
                        <select
                          id='city'
                          name='city'
                          value={city}
                          onChange={onChangeBasic}
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

                      <div className='form-group col-12 col-lg-6'>
                        <label htmlFor='blood_type' className='float-left'>
                          Blood type
                        </label>
                        <select
                          id='blood_type'
                          name='blood_type'
                          value={blood_type}
                          onChange={onChangeBasic}
                          className='custom-select input-select input-text'
                        >
                          <option value='0'>Select a Blood type</option>
                          {blood_types !== null &&
                            blood_types.length > 0 &&
                            blood_types.map((type) => (
                              <option key={type.code} value={type.id}>
                                {type.code}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className='row text-left mt-2'>
                      <div className='col'>
                        <h6>Preferences</h6>
                      </div>
                    </div>

                    <div className='row text-left'>
                      <div className='col-12 col-lg-6'>
                        <div className='form-check mb-2 mr-sm-2'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='is_phone_hidden'
                            name='is_phone_hidden'
                            checked={is_phone_hidden}
                            onChange={onCheckboxChange}
                          />
                          <label
                            className='form-check-label'
                            htmlFor='is_phone_hidden'
                          >
                            Hide phone number
                          </label>
                        </div>
                      </div>

                      <div className='col-12 col-lg-6'>
                        <div className='form-check mb-2 mr-sm-2'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='is_sharing_blood'
                            name='is_sharing_blood'
                            checked={is_sharing_blood}
                            onChange={onCheckboxChange}
                          />
                          <label
                            className='form-check-label'
                            htmlFor='is_sharing_blood'
                          >
                            Share Blood
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <input
                          type='submit'
                          value='Save'
                          className='button-gray float-right mt-2'
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className='section security mt-4'>
                  <h5 className='title text-left'>Security</h5>
                  <form onSubmit={onSubmitPassword}>
                    <div className='row text-left mt-2'>
                      <div className='col'>
                        <h6>Change password</h6>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='form-group col-12 col-lg-4'>
                        <label htmlFor='old_password' className='float-left'>
                          Old password
                        </label>
                        <input
                          className='input-text'
                          type='password'
                          id='old_password'
                          name='old_password'
                          value={old_password}
                          placeholder='Old password'
                          onChange={onChangePasswords}
                        />
                      </div>

                      <div className='form-group col-12 col-lg-4'>
                        <label htmlFor='new_password' className='float-left'>
                          New password
                        </label>
                        <input
                          className='input-text'
                          type='password'
                          id='new_password'
                          name='new_password'
                          value={new_password}
                          placeholder='New password'
                          onChange={onChangePasswords}
                        />
                      </div>

                      <div className='form-group col-12 col-lg-4'>
                        <label
                          htmlFor='confirm_password'
                          className='float-left'
                        >
                          Confirmation
                        </label>
                        <input
                          className='input-text'
                          type='password'
                          id='confirm_password'
                          name='confirm_password'
                          value={confirm_password}
                          placeholder='Confirmation'
                          onChange={onChangePasswords}
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col'>
                        <input
                          type='submit'
                          value='Confirm'
                          className='button-gray float-right mt-2'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </>
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
    </div>
  );
};

const mapSateToProps = (state) => ({
  profile: state.auth.user,
  loading_profile: state.auth.loading_profile,
  wilayas: state.locations.states,
  cities: state.locations.cities,
  loading_states: state.locations.loading_states,
  loading_state_cities: state.locations.loading_state_cities,
});

export default connect(mapSateToProps, {
  getStates,
  getStateCities,
  clearCities,
  clearErrors,
  setAlert,
  loadProfile,
  updateProfile,
  updatePassword,
})(Profile);
