/* eslint-env node, browser */

import BaseClient from './baseClient';

/**
 * Class for logging in and registering user. Note that these post requests do not require
 * the user to be authenticated.
 * @class
 */
export default class LoginClient extends BaseClient {
  constructor(baseUrl = '') {
    super(baseUrl);
  }

  /**
   * Post request for logging in as userId.
   * If successful client will be redirected to the path given in query parameter
   * @param {string} userId - id of user
   * @param {string} password - password of user
   * @return {Promise} resolves if successfully logged in.
   */

  login(email, password, isRemember) {
    let data = {
      email: email,
      password: password,
      isRemember: isRemember,
    };

    return super.post(['/api/v1/auth/login'], data);
  }

  /**
   * Post request for registering a new user.
   * @param {string} password - Password for user
   * @param {string} email - email address.
   * @param {string} firstName - first name of user
   * @param {string} lastName - last name of user
   * @return {Promise} - resolves if successfully added user, rejects otherwise.
   */
  register(data) {
    return super.post(['/api/v1/auth/register'], data);
  }
  /**
   * Post request forgot password.
   * @param {string} [email=''] - email of user
   * @param {string} baseUrl - baseUrl
   * @return {Promise} - resolves if successfully exist user, rejects otherwise.
   */
  forgotPassword(email) {
    let data = {
      email: email,
    };
    return super.post(['/api/v1/auth/forgot'], data);
  }
  /**
   * Post request for reset password.
   * @param {string} token - token
   * @param {string} email - email of user
   * @param {string} password - new Password of user
   * @return {Promise} - resolves if successfully reset password, rejects otherwise.
   */
  resetPassword(token, email, password) {
    let data = {
      token: token,
      email: email,
      password: password,
    };

    return super.post(['/api/v1/auth/reset'], data);
  }

  /**
   * Post request for verify token
   * @param {string} token - token
   * @param {string} email - email of user
   * @return {Promise} - resolves if successfully verified, rejects otherwise.
   */
  verifyToken(token, email) {
    let data = {
      token: token,
      email: email,
    };
    return super.post(['/api/v1/auth/verify-forgot-token'], data);
  }

  /**
   * Post request for resend Email.
   * @param {string} email
   * @return {Promise} - resolves if successfully resend email, rejects otherwise.
   */
  resendEmail(email) {
    let data = {
      email: email,
    };
    return super.post(['/api/v1/auth/resend'], data);
  }
}
