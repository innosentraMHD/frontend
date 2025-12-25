import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

export const TermsOfUse = () => (
  <Container sx={{ py: 10 }}>
    <Typography variant="h3" gutterBottom>Terms of Use</Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="h6">User Agreement</Typography>
    <Typography paragraph>
      By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use.
    </Typography>
    <Typography variant="h6">License</Typography>
    <Typography paragraph>
      Permission is granted to temporarily download one copy of the materials on Innosentra's web site for personal viewing only.
    </Typography>
  </Container>
);