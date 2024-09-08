import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks for fetching conversations and messages
export const fetchConversations = createAsyncThunk(
  'chat/fetchConversations',
  async () => {
    const response = await fetch('http://localhost:3001/contacts'); // Fetch contacts as conversations
    return await response.json();
  }
);

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (contactId) => {
    // Simulating fetching messages; replace with real API if available
    const response = await fetch(`http://localhost:3001/messages/${contactId}`);
    return await response.json();
  }
);

const initialState = {
  conversations: [], // Updated to be dynamic
  selectedChatId: null,
  messages: {}, // Updated to be dynamic
  status: 'idle',
  error: null,
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
      if (state.messages[chatId]) {
        state.messages[chatId].push({ sender: 'You', message });
        state.conversations = state.conversations.map(conversation =>
          conversation.id === chatId
            ? { ...conversation, lastMessage: message }
            : conversation
        );
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

export const { selectChat, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
