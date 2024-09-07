// src/slices/onlineFriendsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const onlineFriendsSlice = createSlice({
  name: 'onlineFriends',
  initialState: {
    friends: [
        { name: 'Hassan', avatar: 'https://avatars.githubusercontent.com/u/119107853?s=400&u=795438ac2230ca0a9f896e5208d4b879a8687500&v=4' },
      ]
      
  },
  reducers: {
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friends = state.friends.filter(friend => friend.name !== action.payload.name);
    },
    updateFriend: (state, action) => {
      const index = state.friends.findIndex(friend => friend.name === action.payload.name);
      if (index !== -1) {
        state.friends[index] = action.payload;
      }
    },
  },
});

export const { addFriend, removeFriend, updateFriend } = onlineFriendsSlice.actions;

export default onlineFriendsSlice.reducer;
