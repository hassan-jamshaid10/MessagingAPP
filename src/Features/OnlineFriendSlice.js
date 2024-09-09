import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch online friends from contacts
export const fetchOnlineFriends = createAsyncThunk(
  'onlineFriends/fetchOnlineFriends',
  async () => {
    const response = await fetch('http://localhost:3001/contacts');
    const data = await response.json();

    // If data is an array directly
    if (Array.isArray(data)) {
      return data.filter(contact => contact.online);
    } else {
      // Handle unexpected data format
      console.error('Unexpected data format:', data);
      return [];
    }
  }
);

const onlineFriendsSlice = createSlice({
  name: 'onlineFriends',
  initialState: {
    friends: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnlineFriends.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOnlineFriends.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends = action.payload;
      })
      .addCase(fetchOnlineFriends.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default onlineFriendsSlice.reducer;
