import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/AuthSlice'; // Import the login thunk
import LoginLayout from '../../LoginLayout';

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

  return (
    <LoginLayout>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoComplete="email"
          autoFocus
          sx={{
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#37B7C3',
              },
              '&:hover fieldset': {
                borderColor: '#37B7C3',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#37B7C3',
              },
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiInputLabel-root': {
              color: '#37B7C3',
            },
          }}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: '#37B7C3' } }}
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
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#37B7C3',
              },
              '&:hover fieldset': {
                borderColor: '#37B7C3',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#37B7C3',
              },
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiInputLabel-root': {
              color: '#37B7C3',
            },
          }}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: '#37B7C3' } }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Link href="/forgot-password" sx={{ color: '#37B7C3', textDecoration: 'none' }}>
            <Typography variant="body2">Forgot your password?</Typography>
          </Link>
          <Link href="/signup" sx={{ color: '#fff', textDecoration: 'none' }}>
            <Typography variant="body2">Sign Up</Typography>
          </Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#37B7C3', '&:hover': { backgroundColor: '#2e98a8' } }}
        >
          Sign In
        </Button>
      </form>
    </LoginLayout>
  );
};

export default LoginPage;
