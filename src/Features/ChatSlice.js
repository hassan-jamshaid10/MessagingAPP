import { createSlice } from '@reduxjs/toolkit';

// Sample initial state with dummy data
const initialState = {
  conversations: [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Wanna catch up later?', avatar: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mike Johnson', lastMessage: 'Got the files!', avatar: 'https://via.placeholder.com/150' },
  ],
  selectedChatId: null,
  messages: {
    1: [
      { sender: 'John Doe', message: 'Hey, how are you?' },
      { sender: 'You', message: 'I\'m good, thanks!' },
    ],
    2: [
      { sender: 'Jane Smith', message: 'Wanna catch up later?' },
      { sender: 'You', message: 'Sure, what time?' },
    ],
    3: [
      { sender: 'Mike Johnson', message: 'Got the files!' },
      { sender: 'You', message: 'Great, thanks!' },
    ],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectChat: (state, action) => {
      state.selectedChatId = action.payload;
    },
    sendMessage: (state, action) => {
      const { chatId, message } = action.payload;
      state.messages[chatId].push({ sender: 'You', message });
      state.conversations = state.conversations.map(conversation =>
        conversation.id === chatId
          ? { ...conversation, lastMessage: message }
          : conversation
      );
    },
  },
});

export const { selectChat, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
