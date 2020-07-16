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

const initialState = {
  user_phone: null,
  loading_phone: false,
  conversations: null,
  conversation_current: null,
  loading: false,
  loading_send: false,
  error: null,
  error_send: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PHONE:
      return {
        ...state,
        user_phone: action.payload,
        loading_phone: false,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        error_send: false,
        loading_send: false,
      };
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload,
        loading: false,
      };
    case GET_CONVERSATION_BY_ID:
      return {
        ...state,
        conversation_current: action.payload,
        loading: false,
      };

    case CLEAR_USER_PHONE:
      return {
        ...state,
        user_phone: null,
        loading_phone: false,
      };

    case GET_PHONE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading_phone: false,
      };

    case MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        error_send: action.payload,
        loading_send: false,
      };

    case SET_LOADING_PHONE:
      return {
        ...state,
        loading_phone: true,
      };

    case SET_LOADING_MESSAGE:
      return {
        ...state,
        loading: true,
      };

    case SET_LOADING_SEND_MESSAGE:
      return {
        ...state,
        loading_send: true,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
