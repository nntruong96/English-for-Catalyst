import { combineReducers } from 'redux';
import auth from './authReducers';
import alert from './alertReducers';
import user from './userReducers';
import documents from './documentsReducers';
const rootReducer = combineReducers({ auth, documents, alert, user });

export default rootReducer;
