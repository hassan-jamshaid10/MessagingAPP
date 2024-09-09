import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemText, ListItemAvatar, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Fab } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact, editContact, addContact, fetchContacts } from '../../Features/ContactSlice';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallPopup from '../CallTab/index';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newContact, setNewContact] = useState({ name: '', phone: '', avatar: '' });
  const [callPopupOpen, setCallPopupOpen] = useState(false); // State for call popup

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = () => {
    if (selectedContact) {
      dispatch(editContact(selectedContact));
      setEditDialogOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact({ ...selectedContact, [name]: value });
  };

  const handleAddNewContact = () => {
    dispatch(addContact(newContact));
    setAddDialogOpen(false);
    setNewContact({ name: '', phone: '', avatar: '' });
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleCallClick = (contact) => {
    setSelectedContact(contact);
    setCallPopupOpen(true);
  };

  const handleCloseCallPopup = () => {
    setCallPopupOpen(false);
    setSelectedContact(null);
  };

  const handleMessage = (contact) => {
    // Navigate to the chat page with the contact's ID
    navigate(`/chats/${contact.id}`); // Adjust this path as per your route configuration
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box flexGrow={1} p={3}>
        <Typography variant="h4" gutterBottom>
          Contacts
        </Typography>

        <Fab 
          color="primary" 
          aria-label="add" 
          onClick={() => setAddDialogOpen(true)} 
          sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <AddIcon />
        </Fab>

        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box display="flex" alignItems="center">
                <ListItemAvatar>
                  <Avatar src={contact.avatar} alt={contact.name} />
                </ListItemAvatar>
                <ListItemText primary={contact.name} secondary={contact.phone} />
              </Box>
              <Box>
                <IconButton color="primary" onClick={() => handleCallClick(contact)}>
                  <CallIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleMessage(contact)}>
                  <ChatIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleEditClick(contact)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDeleteClick(contact.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>

        {/* Edit Contact Dialog */}
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Contact</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              name="name"
              value={selectedContact?.name || ''}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              value={selectedContact?.phone || ''}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Avatar URL"
              name="avatar"
              value={selectedContact?.avatar || ''}
              onChange={handleInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditContact} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Contact Dialog */}
        <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)}>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              name="name"
              value={newContact.name}
              onChange={handleNewInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              value={newContact.phone}
              onChange={handleNewInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Avatar URL"
              name="avatar"
              value={newContact.avatar}
              onChange={handleNewInputChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAddDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddNewContact} color="primary">
              Add Contact
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* Call Popup Dialog */}
      {selectedContact && (
        <CallPopup 
          open={callPopupOpen} 
          onClose={handleCloseCallPopup} 
          contact={selectedContact} 
        />
      )}
    </Box>
  );
};

export default ContactsPage;
