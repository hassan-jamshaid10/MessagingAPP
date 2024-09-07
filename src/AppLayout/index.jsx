import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/SideBar'; // Adjust path if necessary
import { Box } from '@mui/material';

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Box display="flex" sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      {!isLoginPage && (
        <Box
          component="nav"
          sx={{
            width: { sm: '250px' },
            flexShrink: 0,
            backgroundColor: '#071952', // Dark Blue for Sidebar
            color: '#EBF4F6', // Very Light Blue for text
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Ensures the sidebar takes the full height
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
            transition: 'width 0.3s', // Smooth transition for sidebar expansion
            '&:hover': {
              width: '250px', // Expanded width
            },
            '&:not(:hover)': {
              width: '60px', // Collapsed width
            },
          }}
        >
          <Sidebar name="Hassan" email="hassan@email.com" />
        </Box>
      )}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#EBF4F6', // Very Light Blue for main content
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
