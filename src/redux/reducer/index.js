import { combineReducers } from 'redux';
import auth from './authReducers';
import alert from './alertReducers';
import user from './userReducers';
import documents from './documentsReducers';
import users from './usersReducers';
const rootReducer = combineReducers({ auth, documents, alert, user, users });

export default rootReducer;
