import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';

const styles = {
  formContainer: {
    backgroundColor: '#000A1F', // Dark background as in the image
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: 2,
    margin: 0,  // Removed margin
    width: '100%',  // Ensure the container takes full width
  },
  loginBox: {
    backgroundColor: '#1A1A2E', // Dark box background
    borderRadius: 4,
    padding: 3,
    boxShadow: 3,
    width: '100%',
  },
  infoSection: {
    color: '#fff',
    textAlign: 'left',
    marginBottom: 2,
    '& svg': {
      color: '#37B7C3',
      marginRight: 1,
      verticalAlign: 'middle',
    },
  },
};

const LoginLayout = ({ children }) => {
  return (
    <Grid container sx={{ height: '100vh', margin: 0 }}>
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
          backgroundColor: '#000A1F',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 3,
          margin: 0,  // Removed margin
          width: '100%',  // Ensure the container takes full width
        }}
      >
        <Typography variant="h4" color="#37B7C3" gutterBottom>
          Sitemark
        </Typography>
        <Box sx={styles.infoSection}>
          <Typography variant="body1">
            <strong>Adaptable performance:</strong> Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.
          </Typography>
        </Box>
        <Box sx={styles.infoSection}>
          <Typography variant="body1">
            <strong>Built to last:</strong> Experience unmatched durability that goes above and beyond with lasting investment.
          </Typography>
        </Box>
        <Box sx={styles.infoSection}>
          <Typography variant="body1">
            <strong>Great user experience:</strong> Integrate our product into your routine with an intuitive and easy-to-use interface.
          </Typography>
        </Box>
        <Box sx={styles.infoSection}>
          <Typography variant="body1">
            <strong>Innovative functionality:</strong> Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginLayout;
