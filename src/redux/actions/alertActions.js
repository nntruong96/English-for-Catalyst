import { alertConstants } from '../constants';

const { SUCCESS, ERROR, WARNING, HIDE, INFO } = alertConstants;

export const success = (title, message, autoHideTime) => {
  return {
    type: SUCCESS,
    title,
    message,
    autoHideTime,
  };
};

export const error = (title, message, autoHideTime) => {
  return {
    type: ERROR,
    title,
    message,
    autoHideTime,
  };
};

export const clear = () => {
  return { type: HIDE, title: '', message: '' };
};

export const warning = (title, message, action, autoHideTime) => {
  return {
    type: WARNING,
    title,
    message,
    action,
    autoHideTime,
  };
};

export const info = (title, message, action, autoHideTime) => {
  return {
    type: INFO,
    title,
    message,
    action,
    autoHideTime,
  };
};
