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

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newContact, setNewContact] = useState({ name: '', phone: '', avatar: '' });

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

  const handleCall = (phone) => {
    alert(`Calling ${phone}`);
  };

  const handleMessage = (phone) => {
    alert(`Messaging ${phone}`);
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
                <IconButton color="primary" onClick={() => handleCall(contact.phone)}>
                  <CallIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleMessage(contact.phone)}>
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

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#EBD3F8', // Footer background color
          color: '#071952', // Footer text color
          padding: '8px 16px', // Padding for the footer
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1, // Gap between icons and text
          fontSize: '0.875rem' // Font size for the footer text
        }}
      >
        <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
          <GitHubIcon sx={{ color: '#071952' }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
          <InstagramIcon sx={{ color: '#071952' }} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedInIcon sx={{ color: '#071952' }} />
        </IconButton>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()}<a> 🐱 MESSAGING APP</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactsPage;
