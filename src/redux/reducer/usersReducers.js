import { createReducer } from '@reduxjs/toolkit';
import { RESET_APP } from '../constants';
import { usersConstants } from '../constants';
const {
  REQUEST_GET_USERS,
  REQUEST_GET_USERS_FAILED,
  REQUEST_GET_USERS_SUCCESS,
  REQUEST_UPDATE_USERS_SUCCESS,
  REQUEST_CREATE_USERS_SUCCESS,
  REQUEST_DELETE_USERS_SUCCESS,
  REQUEST_DELETE_USER_SUCCESS,
} = usersConstants;

const initialState = {
  hasFetched: false,
  isFetching: false,
  users: [],
  page_info: {},
};

const users = createReducer(initialState, {
  [RESET_APP]: (state, action) => {
    state = initialState;
    return state;
  },
  [REQUEST_GET_USERS]: (state, action) => {
    state.isFetching = true;
    return state;
  },
  [REQUEST_GET_USERS_FAILED]: (state, action) => {
    state.isFetching = false;
    return state;
  },
  [REQUEST_GET_USERS_SUCCESS]: (state, action) => {
    state.isFetching = false;
    state.hasFetched = true;
    state.users = action.data.list;
    state.page_info = action.data.page_info;
    return state;
  },
  [REQUEST_UPDATE_USERS_SUCCESS]: (state, action) => {
    let userIndex = state.users.findIndex(
      (item) => item._id === action.data._id
    );
    state.users[userIndex] = action.data;
    return state;
  },
  [REQUEST_CREATE_USERS_SUCCESS]: (state, action) => {
    state.users.push(action.data);
    return state;
  },
  [REQUEST_DELETE_USERS_SUCCESS]: (state, action) => {
    state.users = state.users.filter((item) => !action.data.includes(item._id));
    return state;
  },
  [REQUEST_DELETE_USER_SUCCESS]: (state, action) => {
    state.users = state.users.filter((item) => action.data !== item._id);
    return state;
  },
});

export default users;
