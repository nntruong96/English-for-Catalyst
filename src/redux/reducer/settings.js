/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';

const initialModel = {
  document: [],
};

export const Slice = createSlice({
  name: 'settings',
  initialState: initialModel,
  reducers: {
    reset() {
      return {
        document: [],
      };
    },
  },
});

export const settingsSliceActions = Slice.actions;
export default Slice.reducer;
