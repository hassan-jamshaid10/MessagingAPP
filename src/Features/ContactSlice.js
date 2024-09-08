import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetch('http://localhost:3001/contacts');
    return await response.json();
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact) => {
    const response = await fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
    return await response.json();
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact) => {
    const { id, ...updates } = contact;
    const response = await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    return await response.json();
  }
);

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts;

export default contactsSlice.reducer;
