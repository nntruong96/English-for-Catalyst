/**
 * Reducers for userClient
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */
import { createReducer } from '@reduxjs/toolkit';
import { userConstants } from '../constants';
import { RESET_APP } from '../constants';
import MockData from 'redux/MockData';
const {
  REQUEST_USER,
  REQUEST_USER_FAILURE,
  RECEIVE_USER,
  INVALID_AVATAR,
  REQUEST_UPLOAD_AVATAR,
  REQUEST_UPLOAD_AVATAR_SUCCESS,
  REQUEST_UPLOAD_AVATAR_FAILURE,
  REQUEST_UPDATE_USER,
  REQUEST_UPDATE_USER_SUCCESS,
  REQUEST_UPDATE_USER_FAILURE,
  UPDATE_USER_SETTING,
} = userConstants;

const initialState = {
  hasFetched: false,
  isFetching: false,
  isAvatarUploading: false,
  invalidUrl: false,
  uploadFailed: false,
  isUpdating: false,
  updateFailed: false,
  user: {},
  userUnits: MockData.userUnits,
};

const user = createReducer(initialState, {
  [RESET_APP]: (state, action) => {
    state = initialState;
    return state;
  },
  [RECEIVE_USER]: (state, action) => {
    state.hasFetched = true;
    state.isFetching = false;
    state.user = action.user;
    return state;
  },
  [REQUEST_USER]: (state, action) => {
    state.isFetching = true;
    return state;
  },
  [REQUEST_USER_FAILURE]: (state, action) => {
    state.isFetching = false;
    return state;
  },
  [INVALID_AVATAR]: (state, action) => {
    state.invalidUrl = true;
    return state;
  },
  [REQUEST_UPLOAD_AVATAR]: (state, action) => {
    state.nvalidUrl = true;
    state.isAvatarUploading = true;
    return state;
  },
  [REQUEST_UPLOAD_AVATAR_SUCCESS]: (state, action) => {
    state.invalidUrl = false;
    state.isAvatarUploading = false;
    state.uploadFailed = false;
    return state;
  },
  [REQUEST_UPLOAD_AVATAR_FAILURE]: (state, action) => {
    state.invalidUrl = false;
    state.isAvatarUploading = false;
    state.uploadFailed = true;
    return state;
  },
  [REQUEST_UPDATE_USER]: (state, action) => {
    state.isUpdating = true;
    return state;
  },
  [REQUEST_UPDATE_USER_SUCCESS]: (state, action) => {
    state.user = action.user;
    state.isUpdating = false;
    return state;
  },
  [REQUEST_UPDATE_USER_FAILURE]: (state, action) => {
    state.isUpdating = false;
    state.updateFailed = true;
    return state;
  },
  [UPDATE_USER_SETTING]: (state, action) => {
    state.user.settings = action.settings;
    return state;
  },
});

export default user;
