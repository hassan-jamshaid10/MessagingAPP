import React from 'react';
import { Box, Grid, Paper, Typography, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import TaskIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Dashboard = () => {
  return (
    <Box display="flex" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      {/* Main Content */}
      <Box flex={1} p={3}>
        {/* Top bar with date and notification */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" color="white">Dashboard</Typography>
          <Box display="flex" alignItems="center">
            <Button variant="contained" sx={{ backgroundColor: '#282828', mr: 2 }}>
              Apr 17, 2023
            </Button>
            <IconButton>
              <NotificationsIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Overview Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E', color: 'white' }}>
              <Typography variant="h5">14k</Typography>
              <Typography variant="subtitle1" color="green">+25%</Typography>
              <Typography variant="body2">Users (Last 30 days)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E', color: 'white' }}>
              <Typography variant="h5">325</Typography>
              <Typography variant="subtitle1" color="red">-25%</Typography>
              <Typography variant="body2">Conversions (Last 30 days)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E', color: 'white' }}>
              <Typography variant="h5">200k</Typography>
              <Typography variant="subtitle1" color="green">+5%</Typography>
              <Typography variant="body2">Event Count (Last 30 days)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E', color: 'white' }}>
              <Button variant="contained" color="primary" fullWidth>
                Get Insights
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Session Graph Section */}
        <Box mt={4}>
          <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E' }}>
            <Typography variant="h6" color="white">Sessions (Last 30 Days)</Typography>
            <Box height="200px" display="flex" justifyContent="center" alignItems="center">
              <Typography color="white">[Chart Placeholder]</Typography>
            </Box>
          </Paper>
        </Box>

        {/* Page Views and Downloads */}
        <Box mt={4}>
          <Paper sx={{ padding: 3, backgroundColor: '#1E1E1E' }}>
            <Typography variant="h6" color="white">Page Views and Downloads (Last 6 Months)</Typography>
            <Box height="200px" display="flex" justifyContent="center" alignItems="center">
              <Typography color="white">[Chart Placeholder]</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
