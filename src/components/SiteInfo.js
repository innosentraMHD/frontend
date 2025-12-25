import { Container, Typography, Box, Divider, Paper } from '@mui/material';

export const SiteInfo = () => (
  <Container sx={{ py: 10 ,minHeight:'100vh'}}>
    <Paper elevation={0} sx={{ p: 4, bgcolor: '#f9f9f9' }}>
      <Typography variant="h3" color="primary" gutterBottom>Site Information</Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="h5" gutterBottom>About INNOSENTRA Platform</Typography>
      <Typography paragraph>
        Innosentra is a leading global provider of AI-driven analytics and smart monitoring solutions. This website serves as the primary digital interface for our clients across retail, construction, and industrial sectors. Our mission is to transform raw data into actionable insights through cutting-edge computer vision technology.
      </Typography>
      <Typography variant="h6" gutterBottom>Ownership and Operations</Typography>
      <Typography paragraph>
        This site is owned and operated by Innosentra Group. All modules including "Retail Solutions", "Traffic Analytics", and "Security Systems" are proprietary technologies developed by our in-house engineering teams. We maintain servers globally to ensure 99.9% uptime for our cloud-based analytics dashboards.
      </Typography>
      <Typography variant="h6" gutterBottom>Technical Specifications</Typography>
      <Typography paragraph>
        The platform utilizes advanced WebGL for data visualization and secure WebSocket protocols for real-time telemetry. We support all modern browsers and provide a responsive experience for mobile and tablet devices.
      </Typography>
    </Paper>
  </Container>
);