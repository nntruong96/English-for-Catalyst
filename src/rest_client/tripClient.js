/**
 * Trip client - all rest calls for Trip
 * @author NNTruong
 */

import BaseClient from './baseClient';

export default class TripClient extends BaseClient {
    constructor(baseUrl = '/api/v1/') {
        super(baseUrl);
    }

    /**
     * Gets the current user
     * @return {Promise} resolves if successfully get current user
     */
    createTrip(trip) {
        return super.put(['trip'], trip);
    }

    /**
     * Gets the current user
     * @return {Promise} resolves if successfully get current user
     */
    getTrip(_id) {
        return super.get(['trip', _id]);
    }

    /**
     * Gets the current user
     * @return {Promise} resolves if successfully get current user
     */
    updateTrip(_id, option) {
        return super.post(['trip', _id], option);
    }

    //get all trip
    getTrips(params) {
        return super.get(['trips'], params);
    }
}
