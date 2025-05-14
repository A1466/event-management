import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Pagination,
  Paper,
  Chip,
  Stack,
  IconButton,
  InputBase,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { sampleMedia, mediaImages } from '../constants/images';

const MediaPage = () => {
  const [page, setPage] = useState(1);
  const heroImage = mediaImages.blog1;
  const media = sampleMedia;

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    'All',
    'Wedding Tips',
    'Planning Guide',
    'Inspiration',
    'Real Weddings',
    'Trends',
    'Venues',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          minHeight: 500,
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
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
                Wedding Blog & Inspiration
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
                Discover the latest trends, tips, and real wedding stories to inspire your special day
              </Typography>

              {/* Search Bar */}
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', md: 400 },
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search articles..."
                  inputProps={{ 'aria-label': 'search articles' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Categories */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            overflowX: 'auto',
            py: 2,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((category, index) => (
            <Chip
              key={category}
              label={category}
              clickable
              color={index === 0 ? 'primary' : 'default'}
              sx={{
                px: 2,
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                },
              }}
            />
          ))}
        </Stack>
      </Container>

      {/* Featured Article */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Article
        </Typography>
        <Card
          sx={{
            display: { md: 'flex' },
            height: { md: 400 },
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { md: '50%' },
              height: { xs: 300, md: '100%' },
              objectFit: 'cover',
            }}
            image={media[0].image}
            alt={media[0].title}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { md: '50%' },
            }}
          >
            <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
              <Chip
                label={media[0].category}
                color="primary"
                size="small"
                sx={{ mb: 2 }}
              />
              <Typography variant="h4" component="h3" gutterBottom>
                {media[0].title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {media[0].description}
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon fontSize="small" />
                  <Typography variant="body2">{media[0].date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon fontSize="small" />
                  <Typography variant="body2">{media[0].author}</Typography>
                </Box>
              </Stack>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
              >
                Read More
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Container>

      {/* Article Grid */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Latest Articles
        </Typography>
        <Grid container spacing={4}>
          {media.slice(1).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  height={240}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack spacing={2}>
                    <Chip
                      label={item.category}
                      color="primary"
                      size="small"
                      sx={{ alignSelf: 'flex-start' }}
                    />
                    <Typography variant="h6" component="h3">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
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
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ color: 'text.secondary', mt: 'auto' }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarTodayIcon fontSize="small" />
                        <Typography variant="caption">{item.date}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon fontSize="small" />
                        <Typography variant="caption">{item.author}</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Pagination
            count={10}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      </Container>

      {/* Newsletter Section */}
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
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Stay Inspired
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Subscribe to our newsletter for the latest wedding trends, tips, and inspiration
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'white',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email"
                  inputProps={{ 'aria-label': 'subscribe to newsletter' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button
                  type="submit"
                  sx={{ p: '10px', whiteSpace: 'nowrap' }}
                  variant="contained"
                >
                  Subscribe
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MediaPage; 