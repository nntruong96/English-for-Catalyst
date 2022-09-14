import { alertConstants, RESET_APP } from '../constants';
import { createReducer } from '@reduxjs/toolkit';

const { SUCCESS, ERROR, CLEAR, WARNING, HIDE, INFO } = alertConstants;

const initialState = {
  message: '',
  title: '',
  subtitle: '',
  show: false,
  type: '',
  autoHideTime: 10000,
  action: [],
  timeCreate: 0,
};
const alertReducers = createReducer(initialState, {
  [RESET_APP]: (state, action) => {
    state = initialState;
    return state;
  },
  [SUCCESS]: (state, action) => {
    state.type = 'success';
    state.title = action.title;
    state.subtitle = action.subtitle;
    state.message = action.message;
    state.autoHideTime = action.autoHideTime;
    state.show = true;
    state.timeCreate = Date.now();
    return state;
  },
  [ERROR]: (state, action) => {
    state.type = 'error';
    state.subtitle = action.subtitle;
    state.message = action.message;
    state.title = action.title;
    state.autoHideTime = action.autoHideTime;
    state.show = true;
    state.timeCreate = Date.now();
    return state;
  },
  [HIDE]: (state, action) => {
    state = {
      ...initialState,
      type: state.type,
      subtitle: state.subtitle,
      title: state.title,
    };
    return state;
  },
  [CLEAR]: (state, action) => {
    state = {
      ...initialState,
      type: state.type,
      subtitle: state.subtitle,
      title: state.title,
    };
    return state;
  },
  [WARNING]: (state, action) => {
    state.type = 'warning';
    state.title = action.title;
    state.subtitle = action.subtitle;
    state.show = true;
    state.action = action.action;
    state.autoHideTime = action.autoHideTime;
    state.message = action.message;
    state.timeCreate = Date.now();
    return state;
  },
  [INFO]: (state, action) => {
    state.type = 'info';
    state.title = action.title;
    state.subtitle = action.subtitle;
    state.show = true;
    state.autoHideTime = action.autoHideTime;
    state.message = action.message;
    state.action = action.action;
    state.timeCreate = Date.now();
    return state;
  },
});

export default alertReducers;
