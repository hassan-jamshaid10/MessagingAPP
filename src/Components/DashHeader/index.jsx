import React, { useState } from 'react';
import { Box, Typography, IconButton, Popover } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DashboardHeader = ({ userName }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-popover' : undefined;

  // Function to get the current date in a readable format
  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h6" color="#071952">
        Welcome, {userName="Hassan"}
      </Typography> {/* Dark Blue for the welcome message */}
      <Box display="flex" alignItems="center">
        <Typography variant="button" sx={{ mr: 2, color: '#071952' }}>
          {getCurrentDate()}
        </Typography>
        <IconButton aria-label="notifications" onClick={handleNotificationClick}>
          <NotificationsIcon sx={{ color: '#071952' }} /> {/* Dark Blue for the icon */}
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            '& .MuiPopover-paper': {
              backgroundColor: 'white',
              border: '1px solid #ddd',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography variant="body2">You have new notifications!</Typography>
        </Popover>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
