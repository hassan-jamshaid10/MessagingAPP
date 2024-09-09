import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks for fetching conversations and messages
export const fetchConversations = createAsyncThunk(
  'chat/fetchConversations',
  async () => {
    const response = await fetch('http://localhost:3001/contacts');
    return await response.json();
  }
);

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (contactId) => {
    const response = await fetch(`http://localhost:3001/messages/${contactId}`);
    return await response.json();
  }
);

const initialState = {
  conversations: [],
  selectedChatId: null,
  messages: {},
  unreadMessages: {}, // Add unread messages state
  status: 'idle',
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectChat: (state, action) => {
      state.selectedChatId = action.payload;
      state.unreadMessages[action.payload] = 0; // Reset unread messages count
    },
    sendMessage: (state, action) => {
      const { chatId, message } = action.payload;
      if (state.messages[chatId]) {
        state.messages[chatId].push({ sender: 'You', message });
        state.conversations = state.conversations.map(conversation =>
          conversation.id === chatId
            ? { ...conversation, lastMessage: message }
            : conversation
        );
      }
    },
    receiveMessage: (state, action) => {
      const { chatId, message } = action.payload;
      if (state.messages[chatId]) {
        state.messages[chatId].push(message);
        if (state.selectedChatId !== chatId) {
          state.unreadMessages[chatId] = (state.unreadMessages[chatId] || 0) + 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.conversations = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages[state.selectedChatId] = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectChat, sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
