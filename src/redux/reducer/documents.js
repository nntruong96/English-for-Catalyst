/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';
import MockData from 'redux/MockData';
const initialModel = {
  units: MockData.units,
  isFetching: false,
  isFetched: false,
};

export const Slice = createSlice({
  name: 'documents',
  initialState: initialModel,
  reducers: {
    reset() {
      return { units: [], isFetching: false, isFetched: false };
    },
  },
});

export const documentsSliceActions = Slice.actions;
export default Slice.reducer;
