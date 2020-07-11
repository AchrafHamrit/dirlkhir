import {
  GET_STATES,
  GET_STATE_CITIES,
  CLEAR_STATE_CITIES,
  SET_LOADING_STATES,
  SET_LOADING_STATE_CITIES,
  LOCATION_ERROR,
} from '../types';

const initialState = {
  states: null,
  cities: null,
  loading_states: false,
  loading_state_cities: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return {
        ...state,
        states: action.payload,
        loading_states: false,
      };

    case GET_STATE_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading_state_cities: false,
      };

    case CLEAR_STATE_CITIES:
      return {
        ...state,
        cities: null,
      };

    case SET_LOADING_STATES:
      return {
        ...state,
        loading_states: true,
      };

    case SET_LOADING_STATE_CITIES:
      return {
        ...state,
        loading_state_cities: true,
      };

    case LOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
