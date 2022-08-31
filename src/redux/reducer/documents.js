/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import MockData from 'redux/MockData';
import { documentsConstants, RESET_APP } from '../constants';
import { createReducer } from '@reduxjs/toolkit';
const { FETCH_DOCUMENTS } = documentsConstants;

function initialState() {
  return {
    units: MockData.units,
    isFetching: false,
    isFetched: false,
  };
}
const authReducers = createReducer(initialState(), {
  [RESET_APP]: (state, action) => {
    state = initialState();
    return state;
  },
});
export default authReducers;
