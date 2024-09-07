import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../Components/SideBar/index';

const AppLayout = ({ children }) => {
  return (
    <Box display="flex" sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        component="nav"
        sx={{
          width: { sm: '250px' },
          flexShrink: 0,
          backgroundColor: '#1E1E1E',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensures the sidebar takes the full height
        }}
      >
        <Sidebar name="Hassan" email="hassan@email.com" />
      </Box>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#121212',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
