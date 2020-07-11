import axios from 'axios';

import {
  GET_STATES,
  GET_STATE_CITIES,
  CLEAR_STATE_CITIES,
  SET_LOADING_STATES,
  SET_LOADING_STATE_CITIES,
  LOCATION_ERROR,
} from '../types';

import { URL as Api } from './api';

// Get states
export const getStates = () => async (dispatch) => {
  try {
    dispatch(setLoadingStates());

    const res = await axios.get(Api + `/wilayas`);

    dispatch({
      type: GET_STATES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOCATION_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get state's cities
export const getStateCities = (stateId) => async (dispatch) => {
  try {
    dispatch(setLoadingStateCities());

    const res = await axios.get(Api + `/cities/wilaya/${stateId}`);

    dispatch({
      type: GET_STATE_CITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOCATION_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Clear wilayas's cities
export const clearCities = () => async (dispatch) => {
  dispatch({ type: CLEAR_STATE_CITIES });
};

// Set loading states to true
export const setLoadingStates = () => {
  return {
    type: SET_LOADING_STATES,
  };
};

// Set loading state cities to true
export const setLoadingStateCities = () => {
  return {
    type: SET_LOADING_STATE_CITIES,
  };
};
