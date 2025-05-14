import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const ServicesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const serviceCategories = [
    { label: 'All Services', value: 'all' },
    { label: 'Wedding Events', value: 'wedding' },
    { label: 'Corporate Events', value: 'corporate' },
    { label: 'Social Events', value: 'social' },
  ];

  const services = [
    {
      id: 1,
      title: 'Full Wedding Planning',
      category: 'wedding',
      description: 'Comprehensive wedding planning services from engagement to honeymoon.',
      image: '/images/wedding-planning.jpg',
      price: 5000,
      features: [
        'Venue Selection & Booking',
        'Vendor Management',
        'Budget Planning',
        'Timeline Creation',
        'Day-of Coordination',
        'Guest List Management',
      ],
      included: [
        'Unlimited Consultations',
        'Vendor Negotiations',
        'RSVP Management',
        'Rehearsal Coordination',
      ],
    },
    {
      id: 2,
      title: 'Corporate Conference',
      category: 'corporate',
      description: 'Professional conference planning and execution for businesses.',
      image: '/images/corporate-conference.jpg',
      price: 8000,
      features: [
        'Venue Selection',
        'Audio/Visual Setup',
        'Catering Management',
        'Registration Services',
        'Speaker Coordination',
      ],
      included: [
        'Project Timeline',
        'Budget Management',
        'On-site Staff',
        'Post-event Report',
      ],
    },
    {
      id: 3,
      title: 'Social Gatherings',
      category: 'social',
      description: 'Create memorable social events for any occasion.',
      image: '/images/social-events.jpg',
      price: 3000,
      features: [
        'Theme Development',
        'Decor Planning',
        'Entertainment Booking',
        'Menu Planning',
        'Guest Services',
      ],
      included: [
        'Event Design',
        'Vendor Coordination',
        'Setup & Cleanup',
        'Timeline Management',
      ],
    },
    {
      id: 4,
      title: 'Destination Weddings',
      category: 'wedding',
      description: 'Expert planning for your dream destination wedding.',
      image: '/images/destination-wedding.jpg',
      price: 10000,
      features: [
        'Location Scouting',
        'Travel Arrangements',
        'Local Vendor Coordination',
        'Legal Requirements',
        'Guest Accommodations',
      ],
      included: [
        'Site Visits',
        'Welcome Party',
        'Cultural Integration',
        'Emergency Management',
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredServices = selectedTab === 0
    ? services
    : services.filter(service => service.category === serviceCategories[selectedTab].value);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Discover our comprehensive range of event management services
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="service categories"
          sx={{ mb: 2 }}
        >
          {serviceCategories.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              icon={
                category.value === 'wedding' ? <CelebrationIcon /> :
                category.value === 'corporate' ? <BusinessIcon /> :
                category.value === 'social' ? <GroupsIcon /> :
                null
              }
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredServices.map((service) => (
          <Grid item key={service.id} xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Starting at ${service.price.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Features:
                </Typography>
                <List dense>
                  {service.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                  What's Included:
                </Typography>
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  {service.included.map((item, index) => (
                    <Grid item key={index}>
                      <Chip
                        label={item}
                        variant="outlined"
                        color="primary"
                        size="small"
                      />
                    </Grid>
                  ))}
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Need a Custom Package?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact us to create a personalized event package that meets your specific needs and budget
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<LocationOnIcon />}
        >
          Schedule a Consultation
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesPage; 