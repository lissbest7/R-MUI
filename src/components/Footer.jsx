import React from 'react';
import { Box, Container, Grid, Link, Typography, Button } from '@mui/material';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: '#002F6C',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Typography  sx={{ color: '#F7F7EE' }} variant="h6" gutterBottom>
              <img src={logo} alt="logo" style={{ width: 20, marginRight: 10 }} />
              Whitepace
            </Typography>
            <Typography variant="body2" sx={{ color: '#F7F7EE' }}>
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <Box>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Overview
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Pricing
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Customer stories
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Blog
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Guides & tutorials
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Help center
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                About us
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Careers
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', display: 'block' }}>
                Media kit
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Try It Today
            </Typography>
            <Typography variant="body2" sx={{ color: '#F7F7EE' }}>
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#007FFF' }}>
              Start today
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', pr: 2 }}>
              English
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', pr: 2 }}>
              Terms & privacy
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', pr: 2 }}>
              Security
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none', color: '#F7F7EE', pr: 2 }}>
              Status
            </Link>
          </Box>
          <Typography variant="body2" sx={{ color: '#F7F7EE' }}>
            ©2021 Whitepace LLC.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
