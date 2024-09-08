import React, { useState } from 'react';
import { Box, Typography, IconButton, Popover, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import logout icon
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Features/AuthSlice'; // Import your logout action

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user?.name || 'Guest'); // Fetch userName from Redux state

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
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
      <Typography variant="h6" color="#2E073F">
        Welcome, {userName}
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="button" sx={{ mr: 2, color: '#2E073F' }}>
          {getCurrentDate()}
        </Typography>
        <IconButton aria-label="notifications" onClick={handleNotificationClick}>
          <NotificationsIcon sx={{ color: '#2E073F' }} />
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
        <IconButton
          aria-label="logout"
          onClick={handleLogout}
          sx={{ ml: 2, color: '#2E073F' }}
        >
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
