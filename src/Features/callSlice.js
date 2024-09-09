import { createSlice } from '@reduxjs/toolkit';

// Initial state for the call slice
const initialState = {
  activeCall: null,
  callHistory: [],
  error: null,
};

const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    startCall: (state, action) => {
      state.activeCall = {
        ...action.payload,
        startTime: new Date().toISOString(),
      };
    },
    endCall: (state) => {
      if (state.activeCall) {
        state.callHistory.push({
          ...state.activeCall,
          endTime: new Date().toISOString(),
          duration: calculateCallDuration(state.activeCall.startTime, new Date().toISOString()),
        });
        state.activeCall = null;
      }
    },
    updateCallDetails: (state, action) => {
      if (state.activeCall) {
        state.activeCall = {
          ...state.activeCall,
          ...action.payload,
        };
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

const calculateCallDuration = (startTime, endTime) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const duration = Math.round((end - start) / 1000); // Duration in seconds
  return `${Math.floor(duration / 60)}:${duration % 60}`;
};

export const { startCall, endCall, updateCallDetails, setError, clearError } = callSlice.actions;

export default callSlice.reducer;
