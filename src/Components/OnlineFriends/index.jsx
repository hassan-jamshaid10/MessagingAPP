import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Avatar } from '@mui/material';
import { fetchOnlineFriends } from '../../Features/OnlineFriendSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const OnlineFriends = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const friends = useSelector(state => state.onlineFriends.friends);
  const status = useSelector(state => state.onlineFriends.status);
  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOnlineFriends());
    }
  }, [dispatch, status]);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const handleFriendClick = (friendId) => {
    navigate(`/chats/${friendId}`); // Navigate to the chat page of the selected friend
  };

  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ mb: 2, color: '#071952' }}>
        Online Friends
      </Typography>
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            mr: 2,
          }}
          onClick={() => handleScroll('left')}
        >
          <Typography variant="body2" sx={{ color: '#071952' }}>‹</Typography>
        </Box>
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollBehavior: 'smooth',
            width: '100%',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {status === 'loading' && <Typography>Loading...</Typography>}
          {status === 'failed' && <Typography color="error">Failed to load online friends.</Typography>}
          {status === 'succeeded' && friends.map((friend) => (
            <Box
              key={friend.id}
              sx={{
                display: 'inline-block',
                textAlign: 'center',
                mx: 1,
                width: '100px',
                position: 'relative',
                cursor: 'pointer', // Add cursor pointer to indicate clickable
              }}
              onClick={() => handleFriendClick(friend.id)} // Handle click event
            >
              <Avatar
                src={friend.avatar}
                alt={friend.name}
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 1,
                }}
              />
              {friend.online && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    border: '2px solid white',
                  }}
                />
              )}
              <Typography variant="body2" sx={{ color: '#071952' }}>
                {friend.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            ml: 2,
          }}
          onClick={() => handleScroll('right')}
        >
          <Typography variant="body2" sx={{ color: '#071952' }}>›</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnlineFriends;
