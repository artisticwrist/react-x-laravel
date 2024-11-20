import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import homeImg from '../assets/images/home-1.png';

const Home = () => {
  // Function to handle the "Get Started" button click
  const onStartClick = () => {
    console.log('Get Started clicked');
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: '100vh', 
        padding: 3 
      }}
    >
      {/* Left Section */}
      <Box sx={{ width: '50%', padding: 3 }}>
        <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 2 }}>
          Managing business payments has never been easier
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: 3 }}>
          End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" size="large" onClick={onStartClick}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Right Section */}
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src={homeImg} 
          alt="Business Solutions" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </Box>
    </Container>
  );
};

export default Home;
