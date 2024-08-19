import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => (
  <Box 
    sx={{ 
      padding: '4rem', 
      textAlign: 'center', 
      backgroundColor: '#e3f2fd', 
      borderRadius: '8px',
      boxShadow: 3
    }}
  >
    <Typography 
      variant="h4" 
      sx={{ 
        marginBottom: '1rem', 
        fontWeight: 'bold', 
        color: '#0d47a1'
      }}
    >
      About Us
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        marginBottom: '2rem', 
        lineHeight: '1.6', 
        color: '#424242'
      }}
    >
      Welcome to our website! At WhiteSpace, we are passionate about delivering exceptional service and innovative solutions. Our team is dedicated to ensuring that every project we undertake meets the highest standards of quality and excellence.
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        lineHeight: '1.6', 
        color: '#424242'
      }}
    >
      Thank you for visiting our site. We look forward to working with you and achieving great things together. If you have any questions or would like to learn more about our services, please feel free to <a href="/contact" style={{ color: '#1e88e5', textDecoration: 'underline' }}>contact us</a>.
    </Typography>
  </Box>
);

export default AboutPage;
