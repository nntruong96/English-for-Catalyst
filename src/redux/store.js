import { configureStore } from '@reduxjs/toolkit';
import user from './reducer/user';
import documents from './reducer/documents';
import settings from './reducer/settings';
export default configureStore({
  reducer: {
    user,
    documents,
    settings,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
