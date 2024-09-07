import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ name, email }) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ height: '100%' }}>
      <Box p={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Messaging App</Typography>
      </Box>

      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/chats">
          <ListItemIcon>
            <ChatIcon sx={{ color: 'white' }} /> 
          </ListItemIcon>
          <ListItemText primary="Chats" />
        </ListItem>
        <ListItem button component={Link} to="/groups">
          <ListItemIcon>
            <GroupIcon sx={{ color: 'white' }} /> 
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button component={Link} to="/call">
          <ListItemIcon>
            <CallIcon sx={{ color: 'white' }} /> 
          </ListItemIcon>
          <ListItemText primary="Call" />
        </ListItem>
        <ListItem button component={Link} to="/contacts">
          <ListItemIcon>
            <PermContactCalendarIcon sx={{ color: 'white' }} /> 
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Box display="flex" alignItems="center">
          <Avatar alt={name} src="https://via.placeholder.com/150" />
          <Box ml={2}>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="caption">{email}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
