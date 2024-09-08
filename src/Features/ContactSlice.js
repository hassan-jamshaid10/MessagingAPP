import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: '1', name: 'John Doe', phone: '123-456-7890', avatar: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Jane Smith', phone: '098-765-4321', avatar: 'https://via.placeholder.com/150' },
    // Add more contacts
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = { id: nanoid(), ...action.payload };
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const { id, name, phone, avatar } = action.payload;
      const existingContact = state.contacts.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.name = name;
        existingContact.phone = phone;
        existingContact.avatar = avatar;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.contacts;

export default contactsSlice.reducer;
