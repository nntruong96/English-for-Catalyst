import { configureStore } from '@reduxjs/toolkit';
import reducer from 'redux/reducer';
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
