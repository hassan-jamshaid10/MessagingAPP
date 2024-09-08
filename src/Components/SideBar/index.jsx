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
      onMouseEnter={() => setExpanded(true)} // Expand when cursor is on the sidebar
      onMouseLeave={() => setExpanded(false)} // Collapse when cursor leaves the sidebar
      sx={{
        height: '100%',
        width: expanded ? '250px' : '70px',
        transition: 'width 0.3s, box-shadow 0.3s',
        backgroundColor: '#2E073F', // Dark purple shade
        color: '#EBD3F8', // Light purple for text
        overflow: 'hidden',
        boxShadow: expanded
          ? '0 4px 20px rgba(0, 0, 0, 0.6), 0 0 20px #AD49E1' // Glowing shadow when expanded
          : '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow when collapsed
        // Added glow effect when expanded
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 0 20px #AD49E1',
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
              <a href="#" style={{ marginLeft: '16px', textDecoration: 'none', color: '#EBD3F8' }}>MESSAGING APP</a>
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
            <HomeIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Home" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
        <ListItem button component={Link} to="/chats" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <ChatIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Chats" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
        <ListItem button component={Link} to="/groups" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <GroupIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Groups" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
        <ListItem button component={Link} to="/call" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <CallIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Call" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
        <ListItem button component={Link} to="/contacts" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <PermContactCalendarIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Contacts" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
        <ListItem button component={Link} to="/settings" sx={{ padding: '8px 16px' }}>
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#EBD3F8' }} />
          </ListItemIcon>
          {expanded && <ListItemText primary="Settings" sx={{ color: '#EBD3F8' }} />}
        </ListItem>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Box display="flex" alignItems="center">
          <Avatar
            alt={name}
            src="https://avatars.githubusercontent.com/u/119107853?s=400&u=795438ac2230ca0a9f896e5208d4b879a8687500&v=4"
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
              <Typography variant="subtitle1" color="#EBD3F8">{name}</Typography>
              <Typography variant="caption" color="#EBD3F8">{email}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
