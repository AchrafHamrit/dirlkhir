import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuid } from 'uuid';

// Set Alert
export const setAlert = (msg, timeout = 5000) => async (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
