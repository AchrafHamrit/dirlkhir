import axios from 'axios';

import {
  GET_USER_PHONE,
  CLEAR_USER_PHONE,
  GET_PHONE_ERROR,
  SEND_MESSAGE,
  GET_CONVERSATIONS,
  GET_CONVERSATION_BY_ID,
  MESSAGE_ERROR,
  SEND_MESSAGE_ERROR,
  SET_LOADING_PHONE,
  SET_LOADING_MESSAGE,
  SET_LOADING_SEND_MESSAGE,
  CLEAR_ERRORS,
} from '../types';

import { URL as Api } from './api';

// Get user phone
export const getUserPhone = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPhone());
    const res = await axios.get(Api + `/posts/user/${id}`);

    dispatch({ type: GET_USER_PHONE, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PHONE_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get conversations
export const getConversations = () => async (dispatch) => {
  try {
    dispatch(setLoadingMessage());
    const res = await axios.get(Api + '/conversations');

    dispatch({ type: GET_CONVERSATIONS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGE_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Get conversation by Id
export const getConversationById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingMessage());
    const res = await axios.get(Api + `/conversations/${id}`);

    dispatch({ type: GET_CONVERSATION_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGE_ERROR,
      payload: error.response?.msg || 'Error',
    });
  }
};

// Send message
export const sendMessage = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoadingMessageSend());
    const res = await axios.post(Api + '/conversations', formData, config);

    dispatch({ type: SEND_MESSAGE, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEND_MESSAGE_ERROR,
      payload: error.response?.msg,
    });
  }
};

// Clear user phone
export const clearUserPhone = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER_PHONE });
};

// Set loading_phone to true
export const setLoadingPhone = () => {
  return { type: SET_LOADING_PHONE };
};

// Set loading to true
export const setLoadingMessage = () => {
  return { type: SET_LOADING_MESSAGE };
};

// Set loading message to true
export const setLoadingMessageSend = () => {
  return { type: SET_LOADING_SEND_MESSAGE };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
