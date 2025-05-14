import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const EventsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Upcoming Events
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Discover and join our exciting upcoming events
        </Typography>
      </Box>
    </Container>
  );
};

export default EventsPage; 