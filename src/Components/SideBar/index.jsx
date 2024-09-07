import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ name, email }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: '100%',
        width: expanded ? '250px' : '70px',
        transition: 'width 0.3s',
        backgroundColor: '#071952',
        color: '#EBF4F6',
        overflow: 'hidden',
        '&:hover': {
          width: '250px', // Expand on hover
        },
      }}
    >
      <Box p={2} display="flex" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: expanded ? 'flex-start' : 'center',
          }}
        >
          {expanded ? (
            <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
              🐱
              <a href="#" style={{ marginLeft: '16px', textDecoration: 'none', color: '#EBF4F6' }}>MESSAGING APP</a>
            </Typography>
          ) : (
            <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              🐱
            </Typography>
          )}
        </Box>
      </Box>

      <List>
        <ListItem button component={Link} to="/" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Home" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
        <ListItem button component={Link} to="/chats" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <ChatIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Chats" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
        <ListItem button component={Link} to="/groups" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <GroupIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Groups" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
        <ListItem button component={Link} to="/call" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <CallIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Call" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
        <ListItem button component={Link} to="/contacts" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <PermContactCalendarIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Contacts" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
        <ListItem button component={Link} to="/settings" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#EBF4F6' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Settings" sx={{ color: '#EBF4F6' }} />}
        </ListItem>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
  <Box display="flex" alignItems="center">
    <Avatar
      alt={name}
      src="https://via.placeholder.com/150"
      sx={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        marginRight: expanded ? '14px' : '8px',
        marginLeft: expanded ? '0px' : '0px', // Adjusted left margin
      }}
    />
    {expanded && (
      <Box>
        <Typography variant="subtitle1" color="#EBF4F6">{name}</Typography>
        <Typography variant="caption" color="#EBF4F6">{email}</Typography>
      </Box>
    )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
