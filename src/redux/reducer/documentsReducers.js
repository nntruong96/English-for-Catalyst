/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { documentsConstants, RESET_APP } from '../constants';
import { createReducer } from '@reduxjs/toolkit';
const { FETCH_DOCUMENTS, FETCH_DOCUMENTS_SUCCESS, FETCH_DOCUMENTS_FAILD } =
  documentsConstants;

function initialState() {
  return {
    units: [],
    isFetching: false,
    hasFetched: false,
  };
}
const authReducers = createReducer(initialState(), {
  [RESET_APP]: (state) => {
    state = initialState();
    return state;
  },
  [FETCH_DOCUMENTS]: (state) => {
    state.isFetching = true;
    return state;
  },
  [FETCH_DOCUMENTS_SUCCESS]: (state, action) => {
    state.isFetching = false;
    state.units = action.data.units;
    state.hasFetched = true;
    return state;
  },
  [FETCH_DOCUMENTS_FAILD]: (state, action) => {
    state.isFetching = false;
    return state;
  },
});
export default authReducers;
