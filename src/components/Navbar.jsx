import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#003366' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <img src={logo} alt="logo" style={{ width: 20 }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          WhiteSpace
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/home" style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#FFF', textDecoration: 'none' }}>About</Link>
          <Link to="/services" style={{ color: '#FFF', textDecoration: 'none' }}>Services</Link>
          <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none' }}>Contacts</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
