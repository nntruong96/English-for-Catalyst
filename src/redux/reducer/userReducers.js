/**
 * Reducers for userClient
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */
import { createReducer } from '@reduxjs/toolkit';
import { userConstants } from '../constants';
import { RESET_APP } from '../constants';
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
  REQUEST_CLASS_ROOM_SUCCESS,
  REQUEST_POST_COMMENT_SUCCESS,
  REQUEST_GRADE_COMMENT_SUCCESS,
  REQUEST_UPDATE_CLASSROOM_SUCCESS,
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
  userUnits: [],
  classRoom: {},
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
    state.userUnits = action.user.userUnits;
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
    state.userUnits = action.userUnits;
    return state;
  },
  [REQUEST_CLASS_ROOM_SUCCESS]: (state, action) => {
    state.classRoom = action.data;
    return state;
  },
  [REQUEST_POST_COMMENT_SUCCESS]: (state, action) => {
    state.classRoom.comments = action.comments;
    return state;
  },
  [REQUEST_GRADE_COMMENT_SUCCESS]: (state, action) => {
    let { userUnits, studentId } = action;
    let studentIndex = state.classRoom.students.findIndex(
      (item) => item._id === studentId
    );
    if (studentIndex >= 0) {
      state.classRoom.students[studentIndex].userUnits = userUnits;
    }
    return state;
  },
  [REQUEST_UPDATE_CLASSROOM_SUCCESS]: (state, action) => {
    let { classRoom } = action;
    state.classRoom.settings = classRoom;
    return state;
  },
});

export default user;
