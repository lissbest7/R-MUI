import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactPage = () => (
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
      Contact Us
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        marginBottom: '2rem', 
        lineHeight: '1.6', 
        color: '#424242' 
      }}
    >
      We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Our team is here to assist you and will get back to you as soon as possible.
    </Typography>
    <Box 
      component="form" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        maxWidth: '600px', 
        margin: '0 auto' 
      }}
    >
      <TextField 
        variant="outlined" 
        label="Name" 
        sx={{ marginBottom: '1rem', width: '100%' }} 
      />
      <TextField 
        variant="outlined" 
        label="Email" 
        type="email" 
        sx={{ marginBottom: '1rem', width: '100%' }} 
      />
      <TextField 
        variant="outlined" 
        label="Message" 
        multiline 
        rows={4} 
        sx={{ marginBottom: '2rem', width: '100%' }} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ width: '100%' }}
      >
        Send Message
      </Button>
    </Box>
    <Typography 
      variant="body2" 
      sx={{ marginTop: '2rem', color: '#555' }}
    >
      Alternatively, you can email us directly at <a href="mailto:contact@whitespace.com" style={{ color: '#1976d2', textDecoration: 'none' }}>contact@whitespace.com</a>.
    </Typography>
  </Box>
);

export default ContactPage;
