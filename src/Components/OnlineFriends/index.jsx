import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Avatar, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

const OnlineFriends = () => {
  const friends = useSelector(state => state.onlineFriends.friends);

  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h6" sx={{ mb: 2, color: '#071952' }}>
        Online Friends
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => scroll('left')} aria-label="scroll left">
          <ArrowBackIcon />
        </IconButton>
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
          {friends.map((friend, index) => (
            <Box
              key={index}
              sx={{
                display: 'inline-block',
                textAlign: 'center',
                mx: 1,
                width: '100px',
              }}
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
              <Typography variant="body2" sx={{ color: '#071952' }}>
                {friend.name}
              </Typography>
            </Box>
          ))}
          <Box
            sx={{
              display: 'inline-block',
              textAlign: 'center',
              mx: 1,
              width: '100px',
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: '#37B7C3',
                color: '#EBF4F6',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
                padding: 0,
              }}
            >
              <AddIcon />
            </Button>
            <Typography variant="body2" sx={{ color: '#071952', mt: 1 }}/>
          </Box>
        </Box>
        <IconButton onClick={() => scroll('right')} aria-label="scroll right">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OnlineFriends;
