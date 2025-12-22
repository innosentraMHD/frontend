import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box 
} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export const Solutions = () => {
  const solutions = [
    {
      icon: <AnalyticsIcon fontSize="large" />,
      title: 'Sales Analytics',
      description: 'Track performance with real-time dashboards and detailed reports.'
    },
    {
      icon: <InventoryIcon fontSize="large" />,
      title: 'Inventory Mgmt',
      description: 'Automated stock tracking to prevent shortages and overstocking.'
    },
    {
      icon: <PointOfSaleIcon fontSize="large" />,
      title: 'POS Systems',
      description: 'Fast and secure checkout experiences for your customers.'
    }
  ];
  
  return (
    <Box 
      id="retail-solutions" 
      sx={{ 
        backgroundColor: 'background.gray',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            '&::after': {
              margin: '10px auto 0'
            }
          }}
          className="section-title-center"
        >
           Solutions
        </Typography>
        
        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <Box sx={{ textAlign: 'center', p: 3, color: 'primary.main' }}>
                  {solution.icon}
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {solution.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};