import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/Features/AuthSlice';
import onlineFriendsReducer from './src/Features/OnlineFriendSlice';
import chatReducer from  './src/Features/ChatSlice'; 
import contactsReducer from './src/Features/ContactSlice';
import callReducer from './src/Features/callSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    onlineFriends: onlineFriendsReducer,
    chat: chatReducer,
    contacts: contactsReducer,
    call: callReducer,
  },
});
