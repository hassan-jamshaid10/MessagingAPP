import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { selectChat } from '../../Features/ChatSlice';
import { Link } from 'react-router-dom';

const UnreadMessages = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chat.conversations);
  const unreadMessages = useSelector((state) => state.chat.unreadMessages);

  const handleClick = (chatId) => {
    dispatch(selectChat(chatId));
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Unread Messages
      </Typography>
      <List>
        {conversations
          .filter((conversation) => unreadMessages[conversation.id] > 0)
          .map((conversation) => (
            <ListItem button key={conversation.id} onClick={() => handleClick(conversation.id)} component={Link} to={`/chats/${conversation.id}`}>
              <ListItemAvatar>
                <Avatar src={conversation.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={conversation.name}
                secondary={`Unread messages: ${unreadMessages[conversation.id]}`}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default UnreadMessages;
