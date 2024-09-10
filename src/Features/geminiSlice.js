import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL for the Google Gemini API
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

// Get the API key from environment variables
const API_KEY = "AIzaSyBfY6DeTJ2Y-e_hnbJDhtEgk7z02eLg6Io";

if (!API_KEY) {
  throw new Error('REACT_APP_GEMINI_API_KEY is not defined');
}

// Async thunk for sending a message
export const sendMessage = createAsyncThunk(
  'gemini/sendMessage',
  async (message, { rejectWithValue }) => {
    try {
      const response = await axios.post(GEMINI_API_URL, {
        contents: [
          {
            role: 'user',
            parts: [{ text: message }],
          },
        ],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'Error occurred');
    }
  }
);

export const geminiSlice = createSlice({
  name: 'gemini',
  initialState: {
    messages: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addMessage } = geminiSlice.actions;

export default geminiSlice.reducer;
