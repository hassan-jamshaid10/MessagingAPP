import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const styles = {
  formContainer: {
    backgroundColor: '#2E073F', // Dark purple background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 60px)', // Adjust height to account for the footer
    padding: 2,
    margin: 0,
    width: '100%',
  },
  loginBox: {
    backgroundColor: '#7A1CAC', // Darker purple box background
    borderRadius: 4,
    padding: 3,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
    width: '100%',
  },
  infoSection: {
    color: '#EBD3F8',
    textAlign: 'left',
    marginBottom: 2,
    '& svg': {
      color: '#AD49E1',
      marginRight: 1,
      verticalAlign: 'middle',
    },
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#2E073F', // Dark purple background for footer
    color: '#EBD3F8', // Light text color
    padding: '10px 0',
    textAlign: 'center',
    borderTop: '1px solid #7A1CAC', // Light purple border at the top
    boxShadow: '0px -3px 6px rgba(0, 0, 0, 0.3)', // Subtle shadow
  },
  socialIcons: {
    fontSize: '24px',
    margin: '0 10px',
    color: '#EBD3F8',
    textDecoration: 'none',
    '&:hover': {
      color: '#AD49E1',
    },
  },
};

const LoginLayout = ({ children }) => {
  return (
    <Grid container sx={{ height: '100vh', margin: 0, position: 'relative' }}>
      <Grid item xs={12} md={6} sx={styles.formContainer}>
        <Container maxWidth="xs">
          <Box sx={styles.loginBox}>{children}</Box>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#2E073F', // Dark purple background for the right side
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 3,
          margin: 0,
          width: '100%',
        }}
      >
        <Typography variant="h4" color="#AD49E1" gutterBottom>
          🐱
          <a href="#" style={{ marginLeft: '16px', textDecoration: 'none', color: '#EBD3F8' }}>MESSAGING APP</a>
        </Typography>
        <Box sx={styles.infoSection}>
  <Typography variant="body1">
    <strong>Welcome to our messaging app!</strong> Stay connected and engaged with your friends and colleagues through seamless communication.
  </Typography>
</Box>
<Box sx={styles.infoSection}>
  <Typography variant="body1">
    <strong>Instant Messaging:</strong> Enjoy real-time conversations with our fast and reliable messaging platform.
  </Typography>
</Box>
<Box sx={styles.infoSection}>
  <Typography variant="body1">
    <strong>Easy to Use:</strong> Navigate effortlessly with our intuitive interface designed for a smooth user experience.
  </Typography>
</Box>
<Box sx={styles.infoSection}>
  <Typography variant="body1">
    <strong>Secure Communication:</strong> Your privacy is our priority. Experience secure and encrypted messaging for peace of mind.
  </Typography>
</Box>

      </Grid>
      <Box sx={styles.footer}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} <a>MESSAGING APP</a></Typography>
        <Box>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcons}>
            <GitHubIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcons}>
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcons}>
            <LinkedInIcon />
          </a>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginLayout;
