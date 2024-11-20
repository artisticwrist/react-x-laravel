import React from 'react';
import { Box, Typography } from '@mui/material';
import grow1 from '../assets/group.svg';
import grow2 from '../assets/group-1.svg';
import grow3 from '../assets/group-2.svg';
import grow4 from '../assets/group-3.svg';
import grow5 from '../assets/group-4.svg';
import grow6 from '../assets/group-5.svg';
import grow7 from '../assets/group-5.svg'; 

const Grow = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'fit-content',
        flexDirection: 'column',
        padding: 2,
        textAlign: 'center',
        marginBottom: 2
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 4 }}>
        Companies We Have Helped Grow
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap', // Allows wrapping to next row
          gap: 3, // Space between items
        }}
      >
        {[grow1, grow2, grow3, grow4, grow5, grow6, grow7].map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Grow ${index + 1}`} 
            style={{ maxWidth: '100px', height: 'auto' }} // Adjusted styling
          />
        ))}
      </Box>
    </Box>
  );
};

export default Grow;
