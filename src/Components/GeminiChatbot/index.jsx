import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, addMessage } from '../../Features/geminiSlice';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const GeminiChat = () => {
  const [newMessage, setNewMessage] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.gemini.messages);
  const status = useSelector((state) => state.gemini.status);
  const error = useSelector((state) => state.gemini.error);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message locally
      dispatch(addMessage({ text: newMessage, sender: 'user' }));
      
      // Send the message to the API
      dispatch(sendMessage(newMessage))
        .unwrap()
        .catch(err => console.error("Failed to send message:", err));
      
      setNewMessage(''); // Clear input field
    }
  };

  return (
    <Box display="flex" flexDirection="column" p={2} height="100%">
      <Box flexGrow={1} overflow="auto" mb={2}>
        {messages.length === 0 && status !== 'loading' && (
          <Typography variant="body1" color="textSecondary">No messages yet.</Typography>
        )}
        {messages.map((msg, index) => (
          <Box key={index} mb={1}>
            <Typography
              variant="body1"
              align={msg.sender === 'user' ? 'right' : 'left'}
              sx={{
                backgroundColor: msg.sender === 'user' ? '#AD49E1' : '#7A1CAC',
                color: '#EBD3F8',
                padding: '8px',
                borderRadius: '4px',
                maxWidth: '80%',
                display: 'inline-block',
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
        {status === 'loading' && <CircularProgress />}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          disabled={status === 'loading'}
        />
        <IconButton color="primary" onClick={handleSendMessage} disabled={status === 'loading'}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GeminiChat;
