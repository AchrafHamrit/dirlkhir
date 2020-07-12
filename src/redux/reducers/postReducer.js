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
} from '../types';

const initialState = {
  requests: null,
  request: null,
  donations: null,
  donation: null,
  categories: null,
  loading: true,
  loading_categories: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };

    case GET_REQUEST_BY_ID:
      return {
        ...state,
        request: action.payload,
        loading: false,
      };

    case GET_DONATIONS:
      return {
        ...state,
        donations: action.payload,
        loading: false,
      };

    case GET_DONATION_BY_ID:
      return {
        ...state,
        donation: action.payload,
        loading: false,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading_categories: false,
      };

    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CATEGORIES_ERROR:
      return {
        ...state,
        loading_categories: false,
        error: action.payload,
      };

    case SET_LOADING_POSTS:
      return {
        ...state,
        loading: true,
      };

    case SET_LOADING_CATEGORIES:
      return {
        ...state,
        loading_categories: true,
      };

    default:
      return state;
  }
};
