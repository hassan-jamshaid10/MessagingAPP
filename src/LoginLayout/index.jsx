import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import styles from '../LoginStyles';

const LoginLayout = ({ children }) => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Section - Login Form */}
      <Grid item xs={12} md={6} sx={styles.formContainer}>
        <Container maxWidth="xs">
          <Box sx={styles.loginBox}>
            {children}
          </Box>
        </Container>
      </Grid>

      {/* Right Section - Image/Illustration */}
      <Grid item xs={12} md={6} sx={styles.imageSection}>
        <img src="/path/to/sample-chat-image.jpg" alt="Sample Chat Illustration" style={styles.image} />
      </Grid>
    </Grid>
  );
};

export default LoginLayout;
