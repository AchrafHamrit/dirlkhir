import { combineReducers } from 'redux';

import authReducer from './authReducer';
import alertReducer from './alertReducer';
import locationReducer from './locationReducer';
import postReducer from './postReducer';
import messageReducer from './messageReducer';
import bloodReducer from './bloodReducer';

export default combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  locations: locationReducer,
  posts: postReducer,
  messages: messageReducer,
  blood: bloodReducer,
});
