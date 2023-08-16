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
  REQUEST_GRADE_SUCCESS,
  REQUEST_UPDATE_CLASSROOM_SUCCESS,
  REQUEST_REMOVE_USER_SUCCESS,
  REQUEST_UPDATE_COMMENT_SUCCESS,
  REQUEST_REMOVE_COMMENT_SUCCESS,
  REQUEST_GET_GRADE_ACTIVITIES_SUCCESS,
  REQUEST_GET_COMMENTS_SUCCESS,
  REQUEST_GET_STUDENTS_SUCCESS,
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
  gradeActivities: {
    total: 0,
    pageSize: 10,
    pageNumber: 0,
    data: [],
    hasFetched: false,
  },
  comments: {
    total: 0,
    pageSize: 10,
    pageNumber: 0,
    data: [],
    hasFetched: false,
  },
  students: {
    total: 0,
    pageSize: 10,
    pageNumber: 0,
    data: [],
    hasFetched: false,
  },
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
    state.comments = { ...state.comments, ...action.comments };
    return state;
  },
  [REQUEST_GRADE_SUCCESS]: (state, action) => {
    // let { activiti, studentId } = action;
    // state.gradeActivities.data = state.gradeActivities.data.filter((item) => {
    //   return (
    //     item.type === activiti &&
    //     Number(studentId) === Number(item.userInfo._id)
    //   );
    // });
    // console.log(state.gradeActivities.data);
    return state;
  },
  [REQUEST_UPDATE_CLASSROOM_SUCCESS]: (state, action) => {
    let { classRoom } = action;
    state.classRoom.settings = classRoom;
    return state;
  },
  [REQUEST_REMOVE_USER_SUCCESS]: (state, action) => {
    let { studentId } = action;
    state.classRoom.students = state.classRoom.students.filter(
      (student) => student._id !== studentId
    );
    return state;
  },
  [REQUEST_UPDATE_COMMENT_SUCCESS]: (state, action) => {
    state.comments = { ...state.comments, ...action.comments };
    return state;
  },
  [REQUEST_REMOVE_COMMENT_SUCCESS]: (state, action) => {
    state.comments = { ...state.comments, ...action.comments };
    return state;
  },
  [REQUEST_GET_GRADE_ACTIVITIES_SUCCESS]: (state, action) => {
    let { pageSize, total, pageNumber, data } = action;
    state.gradeActivities = {
      total,
      pageSize,
      pageNumber,
      data,
      hasFetched: true,
    };
    return state;
  },
  [REQUEST_GET_COMMENTS_SUCCESS]: (state, action) => {
    let { pageSize, total, pageNumber, data } = action;
    state.comments = {
      total,
      pageSize,
      pageNumber,
      data,
      hasFetched: true,
    };
    return state;
  },
  [REQUEST_GET_STUDENTS_SUCCESS]: (state, action) => {
    let { pageSize, total, pageNumber, data } = action;
    state.students = {
      total,
      pageSize,
      pageNumber,
      data,
      hasFetched: true,
    };
    return state;
  },
});

export default user;
