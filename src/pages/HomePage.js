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
  TextField,
  Pagination,
} from '@mui/material';
import { venueImages, eventImages, mediaImages } from '../constants/images';

const HomePage = () => {
  const categories = [
    {
      title: 'Weddings & Photography',
      image: venueImages.wedding1,
      link: '/services/weddings',
    },
    {
      title: 'Corporate Parties & Seminars',
      image: eventImages.corporate1,
      link: '/services/corporate',
    },
    {
      title: 'Election Campaigns',
      image: eventImages.party1,
      link: '/services/campaigns',
    },
    {
      title: 'FS LED/LED Van Marketing',
      image: eventImages.party2,
      link: '/services/marketing',
    },
  ];

  const popularVenues = [
    {
      name: 'Grand Wedding Palace',
      image: venueImages.wedding1,
      link: '/venues/dubai-marina',
    },
    {
      name: 'Luxury Resort & Spa',
      image: venueImages.resort1,
      link: '/venues/palm-jumeirah',
    },
    {
      name: 'Beachfront Villa',
      image: venueImages.wedding2,
      link: '/venues/jumeirah-beach',
    },
    {
      name: 'Royal Garden Hotel',
      image: venueImages.resort2,
      link: '/venues/royal-garden',
    },
  ];

  const featuredVideos = [
    {
      title: 'Wedding Highlights 2024',
      thumbnail: venueImages.wedding1,
    },
    {
      title: 'Corporate Event Success',
      thumbnail: eventImages.corporate1,
    },
    {
      title: 'Beach Wedding Special',
      thumbnail: venueImages.wedding2,
    },
    {
      title: 'Luxury Resort Tour',
      thumbnail: venueImages.resort1,
    },
    {
      title: 'Party Planning Guide',
      thumbnail: eventImages.party1,
    },
    {
      title: 'Marketing Campaign Tips',
      thumbnail: eventImages.party2,
    },
    {
      title: 'Wedding Decor Ideas',
      thumbnail: venueImages.wedding3,
    },
    {
      title: 'Resort Wedding Package',
      thumbnail: venueImages.resort3,
    },
  ];

  const latestMedia = [
    {
      title: 'Top Wedding Trends 2024',
      description: 'Discover the latest trends in wedding celebrations',
      image: mediaImages.blog1,
    },
    {
      title: 'Planning Your Dream Wedding',
      description: 'Expert tips for organizing the perfect wedding day',
      image: mediaImages.blog2,
    },
    {
      title: 'Destination Weddings Guide',
      description: 'Everything you need to know about destination weddings',
      image: mediaImages.blog3,
    },
    {
      title: 'Wedding Budget Planning',
      description: 'Smart tips for managing your wedding budget',
      image: mediaImages.blog4,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          minHeight: 600,
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
            backgroundImage: `url(${venueImages.wedding1})`,
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
            Your Wedding, Your Way
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
            Create your perfect day with our expert wedding planning services
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
            }}
          >
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                defaultValue=""
                displayEmpty
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)' }}
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value="wedding">Wedding</MenuItem>
                <MenuItem value="corporate">Corporate</MenuItem>
                <MenuItem value="party">Party</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 200 }}>
              <Select
                defaultValue=""
                displayEmpty
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)' }}
              >
                <MenuItem value="">Select Location</MenuItem>
                <MenuItem value="dubai">Dubai</MenuItem>
                <MenuItem value="abu-dhabi">Abu Dhabi</MenuItem>
                <MenuItem value="al-ain">Al Ain</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              sx={{ px: 4, height: '100%' }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Browse by Category */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h2">
            Browse By Category
          </Typography>
          <Button variant="outlined" color="primary">
            View All (10)
          </Button>
        </Box>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
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
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {category.title}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ mt: 2 }}
                    href={category.link}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Venues */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h2">
            Popular Venues
          </Typography>
          <Button variant="outlined" color="primary">
            View All (500)
          </Button>
        </Box>
        <Grid container spacing={4}>
          {popularVenues.map((venue, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
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
                  <Typography
                    variant="h6"
                    component="h3"
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    {venue.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      href={venue.link}
                    >
                      Explore
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Videos */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h2">
            Featured Videos
          </Typography>
          <Button variant="outlined" color="primary">
            View All (15)
          </Button>
        </Box>
        <Grid container spacing={4}>
          {featuredVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={video.thumbnail}
                  alt={video.title}
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
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Latest Media */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4" component="h2">
            Latest Media
          </Typography>
          <Button variant="outlined" color="primary">
            View All (100)
          </Button>
        </Box>
        <Grid container spacing={4}>
          {latestMedia.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
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
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ mt: 'auto' }}
                  >
                    Read More
                  </Button>
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
                Ready to Plan Your Dream Wedding?
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Let us help you create the perfect celebration that reflects your unique style and vision
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
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 