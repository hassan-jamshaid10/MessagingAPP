import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../../Components/SideBar'; // Adjust path if necessary
import { Box } from '@mui/material';

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Retrieve user info from auth slice
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Box display="flex" sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      {!isLoginPage && isAuthenticated && (
        <Box
          component="nav"
          sx={{
            width: { sm: '250px' },
            flexShrink: 0,
            backgroundColor: '#2E073F', // Synthwave theme color
            color: '#EBD3F8', // Synthwave theme color for text
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Ensures the sidebar takes the full height
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
            transition: 'width 0.3s, box-shadow 0.3s', // Smooth transition for sidebar expansion and shadows
            '&:hover': {
              width: '250px', // Expanded width
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)', // Glowing shadow on hover
            },
            '&:not(:hover)': {
              width: '70px', // Collapsed width
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow when not hovered
            },
          }}
        >
          <Sidebar 
            name={user?.name || "Guest"} 
            email={user?.email || "guest@example.com"} 
          />
        </Box>
      )}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#EBD3F8', // Synthwave theme color for main content
          color: '#2E073F', // Font color for text in the main content
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
