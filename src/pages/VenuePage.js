import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  FormControl,
  Select,
  MenuItem,
  Rating,
  InputLabel,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { sampleVenues, venueImages } from '../constants/images';

const VenuePage = () => {
  const heroImage = venueImages.wedding1;
  const venues = sampleVenues;

  const filters = {
    guests: ['50-100', '100-300', '300-500', '500+'],
    types: ['Hotel', 'Resort', 'Beach', 'Garden', 'Ballroom'],
    spaces: ['Indoor', 'Outdoor', 'Both'],
    settings: ['Traditional', 'Modern', 'Rustic', 'Luxury'],
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Our Wedding Venues
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 600,
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}
          >
            Discover the perfect venue for your dream wedding
          </Typography>
          
          {/* Search Filters */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              mt: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select label="Category" defaultValue="">
                    <MenuItem value="">All Categories</MenuItem>
                    {filters.types.map((type) => (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Location</InputLabel>
                  <Select label="Location" defaultValue="">
                    <MenuItem value="">All Locations</MenuItem>
                    <MenuItem value="dubai">Dubai</MenuItem>
                    <MenuItem value="abu-dhabi">Abu Dhabi</MenuItem>
                    <MenuItem value="al-ain">Al Ain</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ height: '100%' }}
                >
                  Search Venues
                </Button>
              </Grid>
            </Grid>

            {/* Additional Filters */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}
            >
              {Object.entries(filters).map(([category, options]) => (
                <FormControl
                  key={category}
                  size="small"
                  sx={{ minWidth: 150, flex: 1 }}
                >
                  <InputLabel>{category.charAt(0).toUpperCase() + category.slice(1)}</InputLabel>
                  <Select label={category.charAt(0).toUpperCase() + category.slice(1)} defaultValue="">
                    <MenuItem value="">All {category}</MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* Venues Grid */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h4" component="h2">
            Featured Wedding Venues
          </Typography>
          <Button variant="outlined" color="primary">
            View All Venues
          </Button>
        </Box>
        
        <Grid container spacing={4}>
          {venues.map((venue, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height={300}
                  image={venue.image}
                  alt={venue.name}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom component="h3">
                    {venue.name}
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {venue.location}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Rating value={venue.rating} readOnly precision={0.1} />
                      <Typography variant="body2" color="text.secondary">
                        ({venue.reviews} reviews)
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                      <Chip
                        icon={<GroupIcon />}
                        label={venue.capacity}
                        variant="outlined"
                      />
                      <Chip
                        icon={<CurrencyRupeeIcon />}
                        label={venue.price}
                        variant="outlined"
                      />
                    </Stack>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      View Details
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Need help finding the perfect venue?
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Our wedding experts are here to help you find your dream venue
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Schedule a Consultation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default VenuePage; 