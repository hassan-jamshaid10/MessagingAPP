import React from 'react';
import { Box, Grid, Paper, Typography, Button, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardHeader from '../DashHeader';
import OverviewSection from '../SearchBar';
import OnlineFriends from '../OnlineFriends';
const Home = () => {
  return (
    <Box >
     <DashboardHeader/>
<OverviewSection/>
<OnlineFriends/>
    

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
  );
};

export default Home;
