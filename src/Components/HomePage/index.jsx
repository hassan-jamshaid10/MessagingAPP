import React from 'react';
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DashboardHeader from '../DashHeader';
import OnlineFriends from '../OnlineFriends';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box flexGrow={1}>
        <DashboardHeader />
        <OnlineFriends />

        {/* Session Graph Section */}
        <Box mt={4}>
          <Paper sx={{ padding: 3, backgroundColor: '#F3F9F9', color: '#071952' }}>
            <Typography variant="h6">Sessions (Last 30 Days)</Typography>
            <Box height="200px" display="flex" justifyContent="center" alignItems="center">
              <Typography>[Chart Placeholder]</Typography>
            </Box>
          </Paper>
        </Box>

        {/* Page Views and Downloads */}
        <Box mt={4}>
          <Paper sx={{ padding: 3, backgroundColor: '#F3F9F9', color: '#071952' }}>
            <Typography variant="h6">Page Views and Downloads (Last 6 Months)</Typography>
            <Box height="200px" display="flex" justifyContent="center" alignItems="center">
              <Typography>[Chart Placeholder]</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#EBD3F8', // Updated footer background color
          color: '#071952', // Footer text color
          padding: '8px 16px', // Reduced padding
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1, // Reduced gap between icons and text
          fontSize: '0.875rem' // Decreased font size
        }}
      >
        <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
          <GitHubIcon sx={{ color: '#071952' }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
          <InstagramIcon sx={{ color: '#071952' }} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedInIcon sx={{ color: '#071952' }} />
        </IconButton>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()}<a> 🐱 MESSAGING APP</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
