import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/user';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
});

export default store;
