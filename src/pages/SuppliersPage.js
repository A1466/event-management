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
  Avatar,
  Paper,
  InputLabel,
  Stack,
  Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { sampleSuppliers, supplierImages } from '../constants/images';

const SuppliersPage = () => {
  const suppliers = sampleSuppliers;

  const categories = [
    { name: 'PHOTOGRAPHER / VIDEOGRAPHER', icon: '📸', color: '#FF6B6B' },
    { name: 'DECORATORS', icon: '🎨', color: '#4ECDC4' },
    { name: 'VENUE PLANNERS', icon: '🏰', color: '#45B7D1' },
    { name: 'CHOREOGRAPHERS', icon: '💃', color: '#96CEB4' },
    { name: 'DESIGNERS', icon: '👗', color: '#D4A5A5' },
    { name: 'MAKEUP ARTIST', icon: '💄', color: '#FFB6B9' },
    { name: 'BAR SERVICES', icon: '🍸', color: '#957DAD' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          minHeight: 400,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
          color: 'white',
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
            Our Suppliers
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
            Find the perfect professionals for your special day
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
                    {categories.map((category) => (
                      <MenuItem key={category.name} value={category.name}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Location</InputLabel>
                  <Select label="Location" defaultValue="">
                    <MenuItem value="">All Locations</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                    <MenuItem value="bangalore">Bangalore</MenuItem>
                    <MenuItem value="chennai">Chennai</MenuItem>
                    <MenuItem value="kolkata">Kolkata</MenuItem>
                    <MenuItem value="hyderabad">Hyderabad</MenuItem>
                    <MenuItem value="goa">Goa</MenuItem>
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
                  Search Suppliers
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Supplier Categories */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Browse by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3,
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    mx: 'auto',
                    bgcolor: category.color,
                    fontSize: '2rem',
                  }}
                >
                  {category.icon}
                </Avatar>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {category.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Suppliers */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="h4" component="h2">
              Featured Suppliers
            </Typography>
            <Button variant="outlined" color="primary">
              View All Suppliers
            </Button>
          </Box>
          <Grid container spacing={4}>
            {suppliers.map((supplier, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    image={supplier.image}
                    alt={supplier.name}
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
                    <Stack spacing={2}>
                      <Typography variant="h5" component="h3">
                        {supplier.name}
                      </Typography>
                      <Chip
                        label={supplier.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon color="primary" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                          {supplier.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Rating value={supplier.rating} readOnly precision={0.1} size="small" />
                        <Typography variant="body2" color="text.secondary">
                          ({supplier.reviews} reviews)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CurrencyRupeeIcon color="primary" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                          {supplier.price}
                        </Typography>
                      </Box>
                      <Button variant="contained" color="primary" fullWidth>
                        View Profile
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Are you a wedding supplier?
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Join our platform and reach thousands of couples planning their dream wedding
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
                Register as Supplier
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SuppliersPage; 