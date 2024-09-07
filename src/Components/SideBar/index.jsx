import React from 'react'
import { Box, Typography,  List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import TaskIcon from '@mui/icons-material/CheckCircle';
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
            <AnalyticsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TaskIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
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
