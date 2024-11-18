import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/AuthSlice'; // Import the login thunk
import LoginLayout from '../../Layouts/LoginLayout/index'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error); // Get error from the store

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await dispatch(login({ email, password })).unwrap(); // Call the login thunk
      navigate('/');
    } catch (err) {
      // Error is handled by the login thunk's rejected case
    }
  };
  const handleOnEnter=(event)=>
  {
    if(event.key=='Enter')
    {
      handleSubmit(event);
    }
  };


  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <LoginLayout>
      <Typography variant="h5" color="#EBD3F8" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit} onKeyDown={handleOnEnter}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
          sx={{
            backgroundColor: '#2E073F', // Dark purple background
            borderRadius: '20px', // Round shape
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px', // Round shape for input field
              '& fieldset': {
                borderColor: '#AD49E1',
              },
              '&:hover fieldset': {
                borderColor: '#AD49E1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#AD49E1',
              },
            },
            '& .MuiInputBase-input': {
              color: '#EBD3F8', // Text color
            },
            '& .MuiInputLabel-root': {
              color: '#AD49E1',
            },
          }}
          InputProps={{ style: { color: '#EBD3F8' } }}
          InputLabelProps={{ style: { color: '#AD49E1' } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{
            backgroundColor: '#2E073F', // Dark purple background
            borderRadius: '20px', // Round shape
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px', // Round shape for input field
              '& fieldset': {
                borderColor: '#AD49E1',
              },
              '&:hover fieldset': {
                borderColor: '#AD49E1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#AD49E1',
              },
            },
            '& .MuiInputBase-input': {
              color: '#EBD3F8', // Text color
            },
            '& .MuiInputLabel-root': {
              color: '#AD49E1',
            },
          }}
          InputProps={{ style: { color: '#EBD3F8' } }}
          InputLabelProps={{ style: { color: '#AD49E1' } }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Link href="/forgot-password" sx={{ color: '#AD49E1', textDecoration: 'none' }}>
            <Typography variant="body2">Forgot your password?</Typography>
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={handleSignUpClick}
            sx={{ color: '#EBD3F8', textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#AD49E1', '&:hover': { backgroundColor: '#7A1CAC' } }}
        >
          Sign In
        </Button>
      </form>
    </LoginLayout>
  );
};

export default LoginPage;
