/**
 *
 * @author NNTruong / nhuttruong6496@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';
import MockData from 'redux/MockData';
const userInfo = {
  firstName: '',
  lastName: '',
  avatar: '',
  email: '',
  id: '',
};
const initialModel = {
  userInfo: {
    ...userInfo,
  },
  userUnits: MockData.userUnits,
  isLogged: true,
  role: 1,
};

export const Slice = createSlice({
  name: 'user',
  initialState: initialModel,
  reducers: {
    reset() {
      return {
        userInfo: {
          ...userInfo,
        },
        isLogged: false,
        role: 1,
      };
    },
    setData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const userSliceActions = Slice.actions;
export default Slice.reducer;
