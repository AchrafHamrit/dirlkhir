import axios from 'axios';

import {
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
  PROFILE_LOADED,
  SET_LOADING_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  GET_BLOOD_DONORS,
  PROFILE_ERROR,
  BLOOD_DONORS_ERROR,
} from '../types';

import setAuthToken from '../../utils/setAuthToken';

import { URL as Api } from './api';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
    return;
  }

  try {
    dispatch(setLoading());
    const res = await axios.get(Api + '/users/self');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post(Api + '/users/register', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error.response.data);

    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg || error.response.data,
    });
  }
};

// Login user
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post(Api + '/users/login', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

// Load profile
export const loadProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    return;
  }

  try {
    dispatch(setLoadingProfile());
    const res = await axios.get(Api + '/users/self');

    dispatch({
      type: PROFILE_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Update profile
export const updateProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoadingProfile());

    const res = await axios.put(Api + '/users/update', formData, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Update password
export const updatePassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoadingProfile());

    const res = await axios.put(Api + '/users/auth', formData, config);

    dispatch({ type: UPDATE_PASSWORD, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Set loading_profile to true
export const setLoadingProfile = () => {
  return { type: SET_LOADING_PROFILE };
};
