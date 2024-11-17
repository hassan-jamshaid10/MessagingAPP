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

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      // Add the user's message to the local state
      dispatch(addMessage({ text: newMessage, role: 'user' }));
      try {
        // Send the user's message to the API and add AI's response
        await dispatch(sendMessage(newMessage)).unwrap();
      } catch (err) {
        console.error('Failed to generate AI response:', err);
      }
      setNewMessage(''); // Clear the input field
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && newMessage.trim()) {
      handleSendMessage();
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f3f4f6"
    >
      <Box
        width="400px"
        height="600px"
        display="flex"
        flexDirection="column"
        p={2}
        borderRadius="16px"
        bgcolor="#ffffff"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      >
        {/* Chat messages */}
        <Box
          flexGrow={1}
          overflow="auto"
          mb={2}
          sx={{
            borderRadius: '8px',
            padding: '8px',
            bgcolor: '#f9fafb',
          }}
        >
          {messages.length === 0 && status !== 'loading' && (
            <Typography variant="body1" color="textSecondary">
              No messages yet.
            </Typography>
          )}
          {messages.map((msg, index) => (
            <Box key={index} mb={1}>
              <Typography
                variant="body1"
                align={msg.role === 'user' ? 'right' : 'left'}
                sx={{
                  backgroundColor: msg.role === 'user' ? '#AD49E1' : '#7A1CAC',
                  color: '#EBD3F8',
                  padding: '8px',
                  borderRadius: '8px',
                  maxWidth: '80%',
                  display: 'inline-block',
                }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))}
          {/* Loading indicator */}
          {status === 'loading' && <CircularProgress />}
          {/* Error message */}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>

        {/* Input field and send button */}
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={status === 'loading'}
          />
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            disabled={status === 'loading' || !newMessage.trim()}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default GeminiChat;
