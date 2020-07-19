import axios from 'axios';

import {
  ADD_POST,
  GET_REQUESTS,
  GET_REQUEST_BY_ID,
  GET_CATEGORIES,
  GET_DONATIONS,
  GET_DONATION_BY_ID,
  GET_PENDING_POSTS,
  GET_PENDING_POST_BY_ID,
  APPROVE_POST,
  DELETE_POST_BY_ADMIN,
  GET_USER_POSTS,
  GET_USER_POST_BY_ID,
  ADD_POST_ERROR,
  POST_ERROR,
  CATEGORIES_ERROR,
  SET_LOADING_ADD_POST,
  SET_LOADING_POSTS,
  SET_LOADING_CATEGORIES,
  SET_LOADING_PENDING_POSTS,
  SET_LOADING_USER_POSTS,
  CLEAR_ERRORS,
  PENDING_POST_ERROR,
  USER_POSTS_ERROR,
} from '../types';

import { URL as Api } from './api';

// Add Post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    dispatch(setLoadingAddPost());

    const res = await axios.post(Api + `/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_POST_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

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
      payload: error.response?.data?.msg,
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
      payload: error.response?.data?.msg,
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
      payload: error.response?.data?.msg,
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
      payload: error.response?.data?.msg,
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
      payload: error.response?.data?.msg,
    });
  }
};

// Get Pending Posts
export const getPendingPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingPendingPosts());
    const res = await axios.get(Api + '/posts/unapproved');

    dispatch({ type: GET_PENDING_POSTS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PENDING_POST_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Get Pending Post By Id
export const getPendingPostById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPendingPosts());

    const res = await axios.get(Api + `/posts/unapproved/${id}`);

    dispatch({ type: GET_PENDING_POST_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PENDING_POST_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Approve Post
export const approvePost = (id) => async (dispatch) => {
  try {
    const res = await axios.post(Api + `/posts/approval/${id}`);

    dispatch({
      type: APPROVE_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PENDING_POST_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Decline Post
export const declinePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(Api + `/posts/admin/delete/${id}`);

    dispatch({
      type: DELETE_POST_BY_ADMIN,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PENDING_POST_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Get User Posts
export const getUserPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingUserPosts());

    const res = await axios.get(Api + `/posts/user`);

    dispatch({ type: GET_USER_POSTS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_POSTS_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Get User Post by id
export const getUserPostById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingUserPosts());

    const res = await axios.get(Api + `/posts/user/id/${id}`);

    dispatch({ type: GET_USER_POST_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_POSTS_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Set loading add post to true
export const setLoadingAddPost = () => {
  return {
    type: SET_LOADING_ADD_POST,
  };
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

// Set loading pending posts to true
export const setLoadingPendingPosts = () => {
  return {
    type: SET_LOADING_PENDING_POSTS,
  };
};

// Set loading users posts to true
export const setLoadingUserPosts = () => {
  return {
    type: SET_LOADING_USER_POSTS,
  };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
