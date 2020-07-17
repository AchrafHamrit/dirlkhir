import {
  GET_REQUESTS,
  GET_REQUEST_BY_ID,
  GET_CATEGORIES,
  GET_DONATIONS,
  GET_DONATION_BY_ID,
  GET_PENDING_POSTS,
  GET_PENDING_POST_BY_ID,
  APPROVE_POST,
  DELETE_POST_BY_ADMIN,
  POST_ERROR,
  CATEGORIES_ERROR,
  SET_LOADING_POSTS,
  SET_LOADING_CATEGORIES,
  SET_LOADING_PENDING_POSTS,
  CLEAR_ERRORS,
  PENDING_POST_ERROR,
} from '../types';

const initialState = {
  requests: null,
  request: null,
  donations: null,
  donation: null,
  pending_posts: null,
  pending_post_current: null,
  categories: null,
  loading: false,
  loading_categories: false,
  loading_pending_posts: false,
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

    case GET_PENDING_POSTS:
      return {
        ...state,
        pending_posts: action.payload,
        loading_pending_posts: false,
      };

    case GET_PENDING_POST_BY_ID:
      return {
        ...state,
        pending_post_current: action.payload,
        loading_pending_posts: false,
      };

    case APPROVE_POST:
      return {
        ...state,
        loading_pending_posts: false,
      };

    case DELETE_POST_BY_ADMIN:
      return {
        ...state,
        loading_pending_posts: false,
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

    case PENDING_POST_ERROR:
      return {
        ...state,
        loading_pending_posts: false,
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

    case SET_LOADING_PENDING_POSTS:
      return {
        ...state,
        loading_pending_posts: true,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        error_pending_posts: null,
      };

    default:
      return state;
  }
};
