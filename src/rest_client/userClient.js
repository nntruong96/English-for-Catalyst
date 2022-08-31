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
        return super.put(['user', 'data'], value);
    }

    /**
     * Update user setting
     */
    updateCurrentUserSetting(parameters) {
        return super.put(['user'], parameters);
    }

    getUsers(params) {
        return super.get(['users'], params);
    }
    createUsers(params) {
        return super.post(['users'], params);
    }

    updateUser(parameters, userId) {
        return super.put(['users', userId], parameters);
    }

    deleteUser(userId) {
        return super.delete(['users', userId]);
    }
}
