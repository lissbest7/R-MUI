import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import logo from "../../assets/img.png"

const HomePage = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '4rem 0', backgroundColor: '#ffffff' }}>
    <Container sx={{ padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ flex: 1, textAlign: 'left' }}>
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>Get More Done with Whitepace</Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.</Typography>
        <Button variant="contained" color="primary">Try Whitepace Free</Button>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'right' }}>
        <img src={logo} alt="Hero" style={{ width: '80%', maxWidth: '600px', height: 'auto' }} />
      </Box>
    </Container>
  </Box>
);

export default HomePage;
