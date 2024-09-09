import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Avatar, Typography, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallPopup from '../CallTab/index';

const CallLog = () => {
  const dispatch = useDispatch();
  const { callHistory } = useSelector((state) => state.call);
  const [selectedContact, setSelectedContact] = useState(null);
  const [openCallPopup, setOpenCallPopup] = useState(false);

  const handleCallClick = (contact) => {
    setSelectedContact(contact);
    setOpenCallPopup(true);
  };

  const handleCloseCallPopup = () => {
    setOpenCallPopup(false);
    setSelectedContact(null);
  };

  if (!callHistory || callHistory.length === 0) {
    return <Typography>No calls available</Typography>;
  }

  return (
    <Box sx={{ p: 3, backgroundColor: '#EBD3F8', height: '100vh', overflowY: 'auto' }}>
      <Grid container spacing={2}>
        {callHistory.map((call, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                backgroundColor: '#D8C8F8', // Lighter shade of #EBD3F8
                borderRadius: '8px',
                color: '#2E073F',
              }}
            >
              <Avatar src={call.avatar} alt={call.name} sx={{ mr: 2 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{call.name}</Typography>
                <Typography variant="body2">
                  {call.type === 'outgoing' ? 'Outgoing' : 'Incoming'} - {call.duration}
                </Typography>
              </Box>
              <IconButton onClick={() => handleCallClick(call)} sx={{ color: '#AD49E1' }}>
                <CallIcon />
              </IconButton>
              <IconButton onClick={() => handleCallClick(call)} sx={{ color: '#AD49E1' }}>
                <VideoCallIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
      <CallPopup open={openCallPopup} onClose={handleCloseCallPopup} contact={selectedContact} />
    </Box>
  );
};

export default CallLog;
