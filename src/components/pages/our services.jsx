import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const OurServices = () => (
  <Box sx={{ padding: '4rem', textAlign: 'center', backgroundColor: '#fafafa', borderRadius: '8px' }}>
    <Typography variant="h4" sx={{ marginBottom: '2rem', fontWeight: 'bold', color: '#0d47a1' }}>
      Our Services
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '3rem', lineHeight: '1.6', color: '#424242' }}>
      At WhiteSpace, we provide a diverse range of services designed to help you achieve your goals efficiently and effectively. Our expert team is committed to delivering solutions that are tailored to your unique needs.
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '8px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#1976d2' }}>Consulting</Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Our consulting services provide strategic advice and actionable solutions to help you navigate complex challenges and drive business growth.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '8px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#1976d2' }}>Project Management</Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              We offer comprehensive project management services to ensure that your projects are completed on time, within budget, and to the highest quality standards.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: '8px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#1976d2' }}>Training & Workshops</Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Our training programs and workshops are designed to equip your team with the skills and knowledge they need to excel and adapt in a rapidly changing environment.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default OurServices;
