import {
  GET_BLOOD_DONORS,
  SET_LOADING_BLOOD_DONORS,
  BLOOD_DONORS_ERROR,
  CLEAR_ERRORS,
} from '../types';

const initialState = {
  donors: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOOD_DONORS:
      return {
        ...state,
        donors: action.payload,
        loading: false,
      };

    case BLOOD_DONORS_ERROR:
      return {
        ...state,
        error_donors: action.payload,
        loading: false,
      };

    case SET_LOADING_BLOOD_DONORS:
      return {
        ...state,
        loading: true,
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
