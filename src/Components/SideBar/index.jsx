import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat'; // Icon for "Chats"
import GroupIcon from '@mui/icons-material/Group'; // Icon for "Groups"
import CallIcon from '@mui/icons-material/Call'; // New icon for "Call"
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'; // Icon for "Contacts"
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <Box display="flex" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#1E1E1E',
          color: 'white',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box p={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sitemark-web</Typography>
        </Box>

        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ChatIcon sx={{ color: 'white' }} /> {/* Updated icon for "Chats" */}
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon sx={{ color: 'white' }} /> {/* Updated icon for "Groups" */}
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CallIcon sx={{ color: 'white' }} /> {/* New icon for "Call" */}
            </ListItemIcon>
            <ListItemText primary="Call" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PermContactCalendarIcon sx={{ color: 'white' }} /> {/* Icon for "Contacts" */}
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>

        <Box mt="auto" p={2}>
          <Box display="flex" alignItems="center">
            <Avatar alt="Riley Carter" src="https://via.placeholder.com/150" />
            <Box ml={2}>
              <Typography variant="subtitle1">Riley Carter</Typography>
              <Typography variant="caption">riley@email.com</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
