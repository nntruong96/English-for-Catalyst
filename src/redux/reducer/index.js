import { combineReducers } from 'redux';
import auth from './authReducers';
import alert from './alertReducers';
import user from './userReducers';
import documents from './documents';
const rootReducer = combineReducers({ auth, documents, alert, user });

export default rootReducer;
