import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/users?email=' + email + '&password=' + password);
      const data = await response.json();
      if (data.length > 0) {
        return data[0]; // Return the user object if found
      } else {
        return thunkAPI.rejectWithValue('Invalid email or password'); // Pass error to rejectWithValue
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error');
    }
  }
);

// Async thunk for sign-up
export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data) {
        return data; // Return the new user object
      } else {
        return thunkAPI.rejectWithValue('Sign-up failed'); // Pass error to rejectWithValue
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Network error');
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
