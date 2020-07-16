import axios from 'axios';

import {
  GET_REQUESTS,
  GET_REQUEST_BY_ID,
  GET_CATEGORIES,
  GET_DONATIONS,
  GET_DONATION_BY_ID,
  POST_ERROR,
  CATEGORIES_ERROR,
  SET_LOADING_POSTS,
  SET_LOADING_CATEGORIES,
  CLEAR_ERRORS,
} from '../types';

import { URL as Api } from './api';

// Get requests
export const getRequests = (keywords, category, wilaya, city) => async (
  dispatch
) => {
  try {
    dispatch(setLoadingPosts());

    let query = '';
    if (keywords !== null && keywords !== '') query += `keywords=${keywords}&`;
    if (category !== 0 && category !== '0') query += `category=${category}&`;
    if (wilaya !== 0 && wilaya !== '0') query += `wilaya=${wilaya}&`;
    if (city !== 0 && city !== '0') query += `city=${city}&`;

    const res = await axios.get(Api + `/posts/search/type/2/?${query}`);

    dispatch({ type: GET_REQUESTS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get request by id
export const getRequestById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPosts());

    const res = await axios.get(Api + `/posts/type/2/id/${id}`);

    dispatch({ type: GET_REQUEST_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get donations
export const getDonations = (keywords, category, wilaya, city) => async (
  dispatch
) => {
  try {
    dispatch(setLoadingPosts());

    let query = '';
    if (keywords !== null && keywords !== '') query += `keywords=${keywords}&`;
    if (category !== 0 && category !== '0') query += `category=${category}&`;
    if (wilaya !== 0 && wilaya !== '0') query += `wilaya=${wilaya}&`;
    if (city !== 0 && city !== '0') query += `city=${city}&`;

    const res = await axios.get(Api + `/posts/search/type/1/?${query}`);

    dispatch({ type: GET_DONATIONS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get donation by id
export const getDonationById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPosts());

    const res = await axios.get(Api + `/posts/type/1/id/${id}`);

    dispatch({ type: GET_DONATION_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get categories
export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setLoadingCategories());

    const res = await axios.get(Api + '/postCategories');

    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CATEGORIES_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Set loading posts to true
export const setLoadingPosts = () => {
  return {
    type: SET_LOADING_POSTS,
  };
};

// Set loading categories to true
export const setLoadingCategories = () => {
  return {
    type: SET_LOADING_CATEGORIES,
  };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
