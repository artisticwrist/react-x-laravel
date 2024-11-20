import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const CryptoPage = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4, // added padding for a more spacious layout
      }}
    >
      {/* Small Text */}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: 2, // added letter spacing for emphasis
        }}
      >
        Why AR SHAKIR
      </Typography>

      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginY: 3, // increased margin for spacing
          color: 'primary.main', // added color for emphasis
        }}
      >
        Specially Designed For Crypto Payments
      </Typography>

      {/* 3-Column Content */}
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: 6,
          justifyContent: 'center', // aligns the grid items centrally
        }}
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <img
              src=""
              alt="Business Solutions"
              style={{
                maxWidth: '80px',
                height: '80px',
                marginBottom: 16,
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Quick Summaries
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh.
            </Typography>
          </Box>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <img
              src=""
              alt="Manage Your Wallet"
              style={{
                maxWidth: '80px',
                height: '80px',
                marginBottom: 16,
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Manage Your Wallet
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. Latter person am secure.
            </Typography>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: 'center',
              padding: 2,
              borderRadius: 2,
              boxShadow: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <img
              src=""
              alt="Request Payment"
              style={{
                maxWidth: '80px',
                height: '80px',
                marginBottom: 16,
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Request Payment
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CryptoPage;
