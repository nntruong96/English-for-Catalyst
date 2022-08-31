import { authConstants, RESET_APP } from '../constants';
import { readCookie } from 'util/cookies';
import { createReducer } from '@reduxjs/toolkit';
const {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_CLEAR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  NOT_VERIFIED_YET,
  RESEND_EMAIL_REQUEST,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  CLOSE,
  DEFAULT_REGISTER,
} = authConstants;

function initialState() {
  let access_token = readCookie('access_token');

  return {
    requesting: false,
    loggedIn: access_token ? true : false,
    loggedInError: false,
    isPasswordReset: false,
    notVerified: false,
    tokenVerified: false,
    isRegistered: false,
    fromLogin: false,
  };
}
const authReducers = createReducer(initialState(), {
  [RESET_APP]: (state, action) => {
    state = initialState();
    return state;
  },
  [LOGIN_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [LOGIN_SUCCESS]: (state, action) => {
    state.loggedIn = true;
    state.requesting = false;
    state.fromLogin = true;
    return state;
  },
  [LOGIN_FAILURE]: (state, action) => {
    state.loggedInError = true;
    state.requesting = false;
    return state;
  },
  [NOT_VERIFIED_YET]: (state, action) => {
    state.notVerified = true;
    state.requesting = false;
    return state;
  },
  [RESEND_EMAIL_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [CLOSE]: (state, action) => {
    state.notVerified = false;
    state.requesting = false;
    return state;
  },
  [RESEND_EMAIL_SUCCESS]: (state, action) => {
    state.notVerified = false;
    state.requesting = false;
    return state;
  },
  [RESEND_EMAIL_FAILURE]: (state, action) => {
    state.notVerified = false;
    state.requesting = false;
    return state;
  },
  [REGISTER_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [RESET_PASSWORD_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [FORGOT_PASSWORD_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [REGISTER_SUCCESS]: (state, action) => {
    state.requesting = false;
    state.isRegistered = true;
    return state;
  },
  [RESET_PASSWORD_SUCCESS]: (state, action) => {
    state.requesting = false;
    state.isPasswordReset = true;
    return state;
  },
  [FORGOT_PASSWORD_SUCCESS]: (state, action) => {
    state.requesting = false;
    return state;
  },
  [DEFAULT_REGISTER]: (state, action) => {
    state.requesting = false;
    state.isRegistered = false;
    return state;
  },
  [REGISTER_FAILURE]: (state, action) => {
    state.requesting = false;
    state.isRegistered = false;
    return state;
  },
  [FORGOT_PASSWORD_CLEAR]: (state, action) => {
    state.requesting = false;
    state.isPasswordReset = false;
    state.isRegistered = false;
    return state;
  },
  [RESET_PASSWORD_FAILURE]: (state, action) => {
    state.requesting = false;
    state.isPasswordReset = false;
    state.isRegistered = false;
    return state;
  },
  [FORGOT_PASSWORD_FAILURE]: (state, action) => {
    state.requesting = false;
    return state;
  },
  [VERIFY_EMAIL_REQUEST]: (state, action) => {
    state.requesting = true;
    return state;
  },
  [VERIFY_EMAIL_SUCCESS]: (state, action) => {
    state.requesting = false;
    state.tokenVerified = true;
    return state;
  },
  [VERIFY_EMAIL_FAILURE]: (state, action) => {
    state.requesting = false;

    state.tokenVerified = false;
    return state;
  },
});
export default authReducers;
