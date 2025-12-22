import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';

export const Offer = () => {
  const solutions = [
    { icon: <PsychologyIcon fontSize="large" />, title: 'AI Engineering & Deep Learning', desc: 'We build and train custom deep learning models for high_accuracy detection and recognition tasks.' },
    { icon: <CenterFocusStrongIcon fontSize="large" />, title: 'Advanced Computer Vision', desc: 'From multi-camera re-identification to complex object tracking, we deliver sophisticated visual analysis.' },
    { icon: <InsightsIcon fontSize="large" />, title: 'Data Analytics & Dashboards', desc: 'Raw video feeds are transformed into actionable KPIs and visualized on intuitive, real-time dashboards.' }
  ];

  return (
    <Box id="solutions" sx={{ py: 8, bgcolor: 'background.dark' }}>
      <Container  maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 6, color: 'text.white' }} > What we offer ? </Typography>
        <Box spacing={4} display="flex" justifyContent="space-evenly" sx={{ bgcolor: 'background.dark'}} gap={2} flexDirection={{ xs: 'column', md: 'row' }}>
          {solutions.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
              <Card sx={{ height: '100%', textAlign: 'center',bgcolor: 'background.dark', p: 2 }}>
                <Box sx={{ color: 'text.white', bgcolor: 'background.dark', my: 2 }}>{item.icon}</Box>
                <CardContent>
                  <Typography color="text.white" variant="h5" gutterBottom fontWeight="bold">{item.title}</Typography>
                  <Typography color="text.white">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};