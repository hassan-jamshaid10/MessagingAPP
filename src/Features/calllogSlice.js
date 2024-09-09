// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the call slice
// const initialState = {
//   activeCall: null, // This will hold the details of the ongoing call
//   callHistory: [],  // Array to store previous calls
//   contacts: [],     // Array to store contacts fetched from db.json
//   error: null,      // To handle any errors
// };

// const callSlice = createSlice({
//   name: 'call',
//   initialState,
//   reducers: {
//     startCall: (state, action) => {
//       const { contactId, ...callDetails } = action.payload;

//       // Find contact details from state or fetch from API if not already present
//       const contact = state.contacts.find(c => c.id === contactId) || { name: 'Unknown', avatar: null };

//       state.activeCall = {
//         ...callDetails,
//         contact,
//         startTime: new Date().toISOString(),
//         type: callDetails.type || 'outgoing', // Default to outgoing if type not provided
//       };
//     },
//     endCall: (state) => {
//       if (state.activeCall) {
//         const endTime = new Date().toISOString();
//         const duration = calculateDuration(state.activeCall.startTime, endTime);

//         state.callHistory.push({
//           ...state.activeCall,
//           endTime,
//           duration,
//         });
//         state.activeCall = null;
//       }
//     },
//     updateCallDetails: (state, action) => {
//       if (state.activeCall) {
//         state.activeCall = {
//           ...state.activeCall,
//           ...action.payload,
//         };
//       }
//     },
//     setContacts: (state, action) => {
//       state.contacts = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
// });

// // Helper function to calculate call duration
// const calculateDuration = (startTime, endTime) => {
//   const start = new Date(startTime);
//   const end = new Date(endTime);
//   const diff = Math.floor((end - start) / 1000); // Duration in seconds

//   const minutes = Math.floor(diff / 60);
//   const seconds = diff % 60;

//   return `${minutes}:${seconds.toString().padStart(2, '0')}`;
// };

// export const { startCall, endCall, updateCallDetails, setContacts, setError, clearError } = callSlice.actions;

// export default callSlice.reducer;
