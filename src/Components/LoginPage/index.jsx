import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../Features/AuthSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Example authentication logic
    if (email === 'hassan@gmail.com' && password === '123') {
      dispatch(loginSuccess({ username: 'hassan', email }));
      navigate('/');
    } else {
      dispatch(loginFailure('Invalid email or password'));
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box 
        sx={{ 
          width: '100%',
          p: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: '#1E1E1E', 
          borderRadius: 1 
        }}
      >
        <Typography variant="h4" color="white" gutterBottom>
          Login
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
            sx={{ backgroundColor: '#121212' }}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: '#aaa' } }}
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
            sx={{ backgroundColor: '#121212' }}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: '#aaa' } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>

        <Grid container>
          <Grid item xs>
            <Link to="/forgot-password" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="body2" color="white">Forgot password?</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="body2" color="white">Don't have an account? Sign Up</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
