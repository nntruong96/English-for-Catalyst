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
          if (
            res.body.error_code === '10002' ||
            res.body.error_code === 10002
          ) {
            callback(res.body);
            return dispatch({ type: NOT_VERIFIED_YET });
          }
          return errorRes(
            dispatch,
            failure,
            res.body,
            {
              show: true,
              type: 'error',
              title: res.body.error_message,
            },
            callback
          );
        }
        successRes(dispatch, success, false, false, callback);
      })
      .catch((err) => {
        return errorRes(
          dispatch,
          failure,
          err,
          {
            show: true,
            type: 'error',
            title: err.message,
          },
          callback
        );
      });
  };
};

/**
 * @function
 * @param {Object} password - the password.
 * @param {Object} email - email.
 * @return {Object} - an action post request.
 */
export const register = (
  { email, password, firstName, lastName, role },
  callback = () => {}
) => {
  let request = () => ({ type: REGISTER_REQUEST });
  let success = () => ({ type: REGISTER_SUCCESS });
  let failure = () => ({ type: REGISTER_FAILURE });

  return (dispatch) => {
    dispatch(request());
    return loginClient
      .register({ email, password, firstName, lastName, role })
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(
            dispatch,
            failure,
            res.body,
            {
              show: true,
              type: 'warning',
            },
            callback
          );
        }
        successRes(dispatch, success, false, false, callback);
      })
      .catch((err) => {
        errorRes(
          dispatch,
          failure,
          err,
          {
            show: true,
            title: err.response ? err.response.text : err.message,
          },
          callback
        );
      });
  };
};

export const resendEmail = (email, callback = () => {}) => {
  let request = () => ({ type: RESEND_EMAIL_REQUEST });
  let success = () => ({ type: RESEND_EMAIL_SUCCESS });
  let failure = () => ({ type: RESEND_EMAIL_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return loginClient
      .resendEmail(email)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(
            dispatch,
            failure,
            res.body,
            {
              show: true,
              type: 'warning',
              title: 'Resend email failed, please try again.',
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          null,
          {
            show: true,
            title:
              "Got it! We've sent a verification email to " +
              email +
              '. Use that to confirm your registration.',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(
          dispatch,
          failure,
          err,
          {
            show: true,
            type: 'warning',
            title: 'Resend email failed, please try again.' + err.message,
          },
          callback
        );
      });
  };
};

/**
 * @function
 * @param {Object} email - the email of user.
 * @return {Object} -  an action post request.
 */
export const forgotPassword = (email, callback = () => {}) => {
  let request = () => ({ type: FORGOT_PASSWORD_REQUEST });
  let success = () => ({ type: FORGOT_PASSWORD_SUCCESS });
  let failure = () => ({ type: FORGOT_PASSWORD_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return loginClient
      .forgotPassword(email)
      .then((res) => {
        if (res && res.body && res.body.error_code) {
          return errorRes(
            dispatch,
            failure,
            res.body,
            {
              show: true,
              type: 'warning',
              title: res.body.error_message,
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          null,
          {
            show: true,
            type: 'success',
            title:
              'Success! Instructions to change your password have been sent to this email.',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(
          dispatch,
          failure,
          err,
          {
            show: true,
            type: 'warning',
            title: err.message,
          },
          callback
        );
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
          let errorMessage = res.body.error_message;
          if (Number(res.body.error_code) === 11004)
            errorMessage =
              'This combo of email and password is out of date...try again?';
          if (Number(res.body.error_code) === 11005)
            errorMessage =
              'This reset link expired after 60 minutes. Please re-enter your email.';

          errorRes(
            dispatch,
            failure,
            res.body,
            {
              show: true,
              type: 'warning',
              message: errorMessage,
            },
            callback
          );

          return;
        }
        successRes(
          dispatch,
          success,
          null,
          {
            type: 'succes',
            title: 'Set passwork successfully',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(
          dispatch,
          failure,
          err,
          {
            show: true,
            title: 'Set passwork failed',
          },
          callback
        );
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
    dispatch(resetApp());
    // window.location.href = '/';
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
