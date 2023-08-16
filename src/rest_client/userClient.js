/**
 * User client - all rest calls for api/user
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

import BaseClient from './baseClient';

export default class UserClient extends BaseClient {
  constructor(baseUrl = '/api/v1/') {
    super(baseUrl);
  }

  /**
   * Gets the current user
   * @return {Promise} resolves if successfully get current user
   */
  getCurrentUser() {
    return super.get(['user']);
  }

  /**
   * Update current user
   * @param {object} parameters - Specifies the user info to be updated
   * @param {string} parameters.password - New user password
   * @param {string} parameters.firstName - New user first name
   * @param {string} parameters.lastName - New user lastname
   * @param {object} parameters.data - New user data
   * @param {object} parameters.settings - New user settings
   * @return {Promise} //TODO: How to document the resolved value.
   */
  updateCurrentUser(parameters) {
    console.log('updateCurrentUser');
    return super.put(['user'], parameters);
  }

  /**
   * Deletes the current user
   * @return {Promise}
   */
  deleteCurrentUser() {
    return super.delete(['user']);
  }

  /**
   * Gets the current user's data
   * @return {Promise} //TODO: How to document the resolved value.
   */
  getCurrentUserData() {
    return super.get(['user', 'data']);
  }

  /**
   * Sets the current user's data
   * @param {object} value - The new user data
   * @return {Promise} //TODO: How to document the resolved value.
   */
  setCurrentUserData(value) {
    console.log('setCurrentUserData');
    return super.put(['user', 'data'], value);
  }

  /**
   * Update user setting
   */
  updateCurrentUserUnit(parameters) {
    console.log('updateCurrentUserSetting');
    return super.put(['user'], parameters);
  }

  getUsers(params) {
    return super.get(['users'], params);
  }
  getUser(userId) {
    return super.get(['users', userId]);
  }
  createUsers(params) {
    return super.post(['users'], params);
  }

  updateUser(parameters, userId) {
    console.log('updateUser');
    return super.put(['users', userId], parameters);
  }

  deleteUser(userId) {
    return super.delete(['users', userId]);
  }

  /**
   * Gets the classroom
   * @return {Promise} resolves if successfully get current user
   */
  getCurrentClassRoom() {
    return super.get(['user/classroom']);
  }
  updateClassRoom(data) {
    return super.put(['user/classroom'], data);
  }

  removeUser({ classRoomId, studentId }) {
    return super.delete(['user', classRoomId, studentId]);
  }
  postComment(data) {
    return super.post(['user/classroom/comment'], data);
  }
  updateComment(data) {
    return super.put(['user/classroom/comment'], data);
  }
  removeComment({ classRoomId, commentId }, fillter) {
    return super.delete(['user/comment', classRoomId, commentId], fillter);
  }
  gradeActivi(data) {
    return super.post(['user/grade'], data);
  }
  getGradeActivites(id, fillter) {
    return super.get([`user/activites/${id}`], fillter);
  }
  getComments(id, fillter) {
    return super.get([`user/comments/${id}`], fillter);
  }
  getStudents(id, fillter) {
    return super.get([`user/students/${id}`], fillter);
  }
}
