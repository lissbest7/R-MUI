import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Section = ({ title, content, bgColor, textColor, isCentered }) => (
  <Box sx={{ backgroundColor: bgColor, color: textColor, padding: '4rem 0', textAlign: isCentered ? 'center' : 'left' }}>
    <Container>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        {content}
      </Typography>
    </Container>
  </Box>
);

export default Section;
