/**
 * Setting client - all rest calls for setting
 * @author NNTruong
 */

import BaseClient from './baseClient';

export default class SettingClient extends BaseClient {
    constructor(baseUrl = '/api/v1/') {
        super(baseUrl);
    }

    /**
     * Gets the get settings
     * @return {Promise} resolves if successfully get settings
     */
    getSetting() {
        return super.get(['settings']);
    }

    /**
     * create settings
     * @return {Promise}
     */
    createSetting(settings) {
        return super.put(['settings'], settings);
    }
}
