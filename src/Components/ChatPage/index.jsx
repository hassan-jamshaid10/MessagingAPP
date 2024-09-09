import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  TextField,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectChat, sendMessage, fetchConversations, fetchMessages, receiveMessage } from '../../Features/ChatSlice';
import CallPopup from '../CallTab';

const ChatPage = () => {
  const { chatId } = useParams(); // Extract chatId from URL
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chat.conversations);
  const selectedChatId = chatId; // Use chatId from URL as the selected chat
  const messages = useSelector((state) => state.chat.messages[selectedChatId] || []);
  const chatStatus = useSelector((state) => state.chat.status);
  const unreadMessages = useSelector((state) => state.chat.unreadMessages);
  const [newMessage, setNewMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCallPopup, setOpenCallPopup] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  useEffect(() => {
    if (selectedChatId) {
      dispatch(fetchMessages(selectedChatId));
    }
  }, [selectedChatId, dispatch]);

  useEffect(() => {
    if (selectedChatId) {
      // Reset unread messages count for the selected chat
      dispatch(receiveMessage({ chatId: selectedChatId, message: {} }));
    }
  }, [selectedChatId, dispatch]);

  const handleSelectChat = (chatId) => {
    dispatch(selectChat(chatId));
    dispatch(receiveMessage({ chatId, message: {} })); // Reset unread count
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChatId) {
      dispatch(sendMessage({ chatId: selectedChatId, message: newMessage }));
      setNewMessage(''); // Clear the input field after sending a message
    }
  };

  const handleAttachClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAttachClose = () => {
    setAnchorEl(null);
  };

  const handleCallClick = () => {
    if (selectedChatId) {
      const contact = conversations.find((conv) => conv.id === selectedChatId);
      setSelectedContact(contact);
      setOpenCallPopup(true);
    }
  };

  const handleCloseCallPopup = () => {
    setOpenCallPopup(false);
    setSelectedContact(null);
  };

  return (
    <Box display="flex" height="100vh">
      {/* Chat List Section */}
      <Box width="30%" bgcolor="#f7f7f7" p={2} borderRight="1px solid #ddd" overflow="hidden">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" gutterBottom>
            Conversations
          </Typography>
          <IconButton color="primary" aria-label="new chat">
            <AddIcon />
          </IconButton>
        </Box>
        <List sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
          {chatStatus === 'loading' && <CircularProgress />}
          {conversations.length === 0 && chatStatus !== 'loading' && (
            <Typography variant="body1">No conversations available</Typography>
          )}
          {conversations.map((conversation) => (
            <ListItem
              button
              key={conversation.id}
              onClick={() => handleSelectChat(conversation.id)}
              selected={selectedChatId === conversation.id}
            >
              <ListItemAvatar>
                <Avatar src={conversation.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={conversation.name}
                secondary={`Unread messages: ${unreadMessages[conversation.id] || 0}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Chat Window Section */}
      <Box width="70%" display="flex" flexDirection="column" justifyContent="space-between" p={2}>
        {/* Chat Header */}
        {selectedChatId && (
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">
              Chat with {conversations.find((conv) => conv.id === selectedChatId)?.name || 'Unknown'}
            </Typography>
            <Box>
              <IconButton color="primary" onClick={handleCallClick}>
                <CallIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleCallClick}>
                <VideoCallIcon />
              </IconButton>
            </Box>
          </Box>
        )}

        <Divider />

        {/* Chat Messages */}
        <Box mt={2} flexGrow={1} overflow="auto">
          {messages.length === 0 && chatStatus !== 'loading' && (
            <Typography variant="body1">No messages yet</Typography>
          )}
          {messages.map((msg, index) => (
            <Box key={index} mb={1}>
              <Typography variant="body1" color={msg.sender === 'You' ? 'primary' : 'textSecondary'}>
                <strong>{msg.sender}</strong>: {msg.message}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Message Input and Attachments */}
        {selectedChatId && (
          <Box display="flex" mt={2} alignItems="center">
            <IconButton onClick={handleAttachClick} color="primary" aria-label="attach">
              <AttachFileIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleAttachClose}
            >
              <MenuItem onClick={handleAttachClose}>
                <ImageIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>Image</Typography>
              </MenuItem>
              <MenuItem onClick={handleAttachClose}>
                <VideoLibraryIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>Video</Typography>
              </MenuItem>
              <MenuItem onClick={handleAttachClose}>
                <InsertDriveFileIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>Document</Typography>
              </MenuItem>
            </Menu>

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage} color="primary">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Box>

      {/* Call Popup */}
      {selectedContact && (
        <CallPopup open={openCallPopup} onClose={handleCloseCallPopup} contact={selectedContact} />
      )}
    </Box>
  );
};

export default ChatPage;
