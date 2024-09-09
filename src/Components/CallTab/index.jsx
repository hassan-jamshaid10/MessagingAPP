import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useDispatch } from 'react-redux';
import { startCall, endCall } from '../../Features/callSlice';

const CallPopup = ({ open, onClose, contact }) => {
  const dispatch = useDispatch();
  const [isVideoCall, setIsVideoCall] = useState(false);

  useEffect(() => {
    if (contact) {
      dispatch(startCall({
        ...contact,
        startTime: new Date().toISOString(),
      }));
    }
    return () => {
      if (contact) {
        dispatch(endCall());
      }
    };
  }, [contact, dispatch]);

  const handleEndCall = () => {
    dispatch(endCall());
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Call with {contact?.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">Ongoing {isVideoCall ? 'Video' : 'Voice'} Call</Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton onClick={() => setIsVideoCall(!isVideoCall)}>
              <VideocamIcon color={isVideoCall ? 'primary' : 'disabled'} />
            </IconButton>
            <IconButton onClick={handleEndCall}>
              <PhoneInTalkIcon color="error" />
            </IconButton>
            <IconButton>
              <MicOffIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEndCall} color="primary">
          End Call
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CallPopup;
