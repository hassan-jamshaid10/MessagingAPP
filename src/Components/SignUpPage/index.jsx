import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Features/AuthSlice'; // Import the signUp thunk
import { useNavigate } from 'react-router-dom';
import SignUpLayout from '../../Layouts/SignupLayout/index';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error); // Get error from the store

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(signUp({ name, email, password })).unwrap(); // Call the signUp thunk
      navigate('/login'); // Navigate to the login page after successful sign-up
    } catch (err) {
      // Error is handled by the signUp thunk's rejected case
    }
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <SignUpLayout>
      <Typography variant="h5" color="#EBD3F8" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            mb: 2
          }}
          InputProps={{ style: { color: '#EBD3F8' } }}
          InputLabelProps={{ style: { color: '#AD49E1' } }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            mb: 2
          }}
          InputProps={{ style: { color: '#EBD3F8' } }}
          InputLabelProps={{ style: { color: '#AD49E1' } }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            mb: 2
          }}
          InputProps={{ style: { color: '#EBD3F8' } }}
          InputLabelProps={{ style: { color: '#AD49E1' } }}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#AD49E1', '&:hover': { backgroundColor: '#7A1CAC' } }}
        >
          Sign Up
        </Button>
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Link href="#" onClick={handleLoginClick} variant="body2" sx={{ color: '#EBD3F8', textDecoration: 'none' }}>
            Already have an account? Log In
          </Link>
        </Box>
      </form>
    </SignUpLayout>
  );
};

export default SignUpPage;
