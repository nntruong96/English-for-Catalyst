import { authConstants, RESET_APP } from '../constants';
import LoginClient from 'rest_client/loginClient';
import { errorRes, successRes } from './response_utils';
import { eraseCookie } from 'util/cookies';
const loginClient = new LoginClient();

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
  RESEND_EMAIL_REQUEST,
  RESEND_EMAIL_SUCCESS,
  RESEND_EMAIL_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  NOT_VERIFIED_YET,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  DEFAULT_REGISTER,
} = authConstants;

/**
 * @function
 * @param {Object} email - the email.
 * @param {Object} password - the password.
 * @return {Object} - an action post login.
 */
export const login = ({ email, password, isRemember }, callback = () => {}) => {
  let request = () => ({ type: LOGIN_REQUEST });
  let success = () => ({ type: LOGIN_SUCCESS });
  let failure = () => ({ type: LOGIN_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return loginClient
      .login(email, password, isRemember)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          callback(res.body);
          if (res.body.error_code === '10002' || res.body.error_code === 10002)
            return dispatch({ type: NOT_VERIFIED_YET });

          return errorRes(dispatch, failure, res, {
            show: true,
            type: 'warning',
          });
        }
        successRes(dispatch, success);
        callback();
      })
      .catch((err) => {
        callback(err);
        return errorRes(dispatch, failure, err);
      });
  };
};

/**
 * @function
 * @param {Object} password - the password.
 * @param {Object} email - email.
 * @return {Object} - an action post request.
 */
export const register = (email, password, firstName, lastName) => {
  let request = () => ({ type: REGISTER_REQUEST });
  let success = () => ({ type: REGISTER_SUCCESS });
  let failure = () => ({ type: REGISTER_FAILURE });

  return (dispatch) => {
    dispatch(request());
    return loginClient
      .register(email, password, firstName, lastName)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(dispatch, failure, res, {
            show: true,
            type: 'warning',
          });
        }
        successRes(dispatch, success);
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, {
          show: true,
          title: err.response ? err.response.text : err.message,
        });
      });
  };
};

export const resendEmail = (email, history) => {
  let request = () => ({ type: RESEND_EMAIL_REQUEST });
  let success = () => ({ type: RESEND_EMAIL_SUCCESS });
  let failure = () => ({ type: RESEND_EMAIL_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return loginClient
      .resendEmail(email)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(dispatch, failure, res.body, {
            show: true,
            type: 'warning',
          });
        }
        successRes(dispatch, success, null, {
          show: true,
          title:
            "Got it! We've sent a verification email to " +
            email +
            '. Use that to confirm your registration.',
        });
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, {
          show: true,
        });
      });
  };
};

/**
 * @function
 * @param {Object} email - the email of user.
 * @return {Object} -  an action post request.
 */
export const forgotPassword = (email, history) => {
  let request = () => ({ type: FORGOT_PASSWORD_REQUEST });
  let success = () => ({ type: FORGOT_PASSWORD_SUCCESS });
  let failure = () => ({ type: FORGOT_PASSWORD_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return loginClient
      .forgotPassword(email)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(dispatch, failure, res.body, {
            show: true,
            type: 'warning',
          });
        }
        successRes(dispatch, success, null, {
          show: true,
          title:
            'Success! Instructions to change your password have been sent to this email.',
        });
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, {
          show: true,
        });
      });
  };
};

/**
 * @function
 * @param {string} password - the new password.
 * @param {string} token - token.
 * @param {string} email - token.
 * @return {Object} - an action post request.
 */
export const resetPassword = ({ token, email, password }, callback) => {
  let request = () => ({ type: RESET_PASSWORD_REQUEST });
  let success = () => ({ type: RESET_PASSWORD_SUCCESS });
  let failure = () => ({ type: RESET_PASSWORD_FAILURE });

  return (dispatch) => {
    dispatch(request());
    return loginClient
      .resetPassword(token, email, password)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          let errorMessage = '';
          if (res.body.error_code === '11004' || res.body.error_code === 11004)
            errorMessage =
              'This combo of email and password is out of date...try again?';
          if (res.body.error_code === '11005' || res.body.error_code === 11005)
            errorMessage =
              'This reset link expired after 60 minutes...try again?';

          errorRes(dispatch, failure, res.body, {
            show: true,
            type: 'warning',
            message: errorMessage,
          });

          if (callback) {
            callback(errorMessage);
          }
          return;
        }
        successRes(dispatch, success);
        if (callback) {
          callback();
        }
      })
      .catch((err) => {
        if (callback) {
          callback(err);
        }
        errorRes(dispatch, failure, err, {
          show: true,
        });
      });
  };
};

/**
 * @function
 * @param {string} token - token.
 * @param {string} email - token.
 * @return {Object} - an action post request.
 */
export const verifyToken = (token, email, history) => {
  let request = () => ({ type: VERIFY_EMAIL_REQUEST });
  let success = () => ({ type: VERIFY_EMAIL_SUCCESS });
  let failure = () => ({ type: VERIFY_EMAIL_FAILURE });

  return (dispatch) => {
    dispatch(request());
    return loginClient
      .verifyToken(token, email)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          history.push('/auth/forgot');
          return errorRes(dispatch, failure, res.body, {
            show: true,
            type: 'warning',
            title:
              'This combo of email and password is out of date...try again?',
          });
        }
        successRes(dispatch, success);
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, {
          show: true,
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    eraseCookie('access_token');
    window.location.href = process.env.REACT_APP_LANDING_HOME;
  };
};

export const resetApp = () => {
  let resetApp = () => ({ type: RESET_APP });
  return (dispatch) => {
    eraseCookie('access_token');
    dispatch(resetApp());
  };
};

export const clearRegister = () => {
  // let clearRegister = () => ({ type: DEFAULT_REGISTER });
  // return (dispatch) => {
  //     dispatch(clearRegister());
  // };

  return { type: DEFAULT_REGISTER };
};
