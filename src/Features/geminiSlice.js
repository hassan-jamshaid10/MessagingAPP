import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleGenerativeAI } from "@google/generative-ai";
//import dotenv from 'dotenv';

//dotenv.config();

// Initialize Google Generative AI
const genAi = new GoogleGenerativeAI("AIzaSyDsF8r5h4Y64Md64FWcu6YoIGHeLvgmxNo");

// Async thunk for sending a message
export const sendMessage = createAsyncThunk(
  'gemini/sendMessage',
  async (message, { rejectWithValue }) => {
    try {
      // Retrieve the generative model
      const model = genAi.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      // Generate content
      const response = await model.generateContent(message);
      const generatedText = await response.response.text();

      return generatedText; // Return the generated response
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred while generating content');
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
        state.messages.push({
          role: 'ai',
          text: action.payload, // Add generated content to messages
        });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addMessage } = geminiSlice.actions;

export default geminiSlice.reducer;
