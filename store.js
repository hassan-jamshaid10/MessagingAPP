import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/Features/AuthSlice';
import onlineFriendsReducer from './src/Features/OnlineFriendSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    onlineFriends: onlineFriendsReducer,
  },
});
