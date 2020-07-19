import axios from 'axios';

import {
  GET_BLOOD_DONORS,
  SET_LOADING_BLOOD_DONORS,
  BLOOD_DONORS_ERROR,
  CLEAR_ERRORS,
} from '../types';

import { URL as Api } from './api';

// Get blood donors
export const getBloodDonors = (wilaya, blood_type) => async (dispatch) => {
  try {
    dispatch(setLoading());

    let query = '';
    if (wilaya !== 0 && wilaya !== '0') query += `wilaya=${wilaya}&`;
    if (blood_type !== 0 && blood_type !== '0')
      query += `blood_type=${blood_type}`;

    const res = await axios.get(Api + `/users/bloodDonors/?${query}`);

    dispatch({ type: GET_BLOOD_DONORS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: BLOOD_DONORS_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING_BLOOD_DONORS };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
