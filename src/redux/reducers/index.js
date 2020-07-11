import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import locationReducer from './locationReducer';
// import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  locations: locationReducer,
});
