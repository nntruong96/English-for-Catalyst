/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';
const initialModel = {
  data: [],
  isFetching: false,
  isFetched: false,
};

export const Slice = createSlice({
  name: 'documents',
  initialState: initialModel,
  reducers: {
    reset() {
      return { data: [], isFetching: false, isFetched: false };
    },
  },
});

export const documentsSliceActions = Slice.actions;
export default Slice.reducer;
