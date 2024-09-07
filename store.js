import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/Features/AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
