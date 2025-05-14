import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  const venues = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Goa',
  ];

  const suppliers = [
    'Photographers',
    'Decorators',
    'Venues Planner',
    'Choreographers',
    'Designers',
    'Makeup Artists',
  ];

  const quickLinks = [
    'About Us',
    'Careers',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions',
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating unforgettable moments and bringing your dream events to life.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/about"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Our Services
              </Link>
              <Link
                component={RouterLink}
                to="/venue"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Venues
              </Link>
              <Link
                component={RouterLink}
                to="/suppliers"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Suppliers
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              123 Wedding Street, Connaught Place
              <br />
              New Delhi, India - 110001
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: +91 98765 43210
              <br />
              Email: info@companyname.com
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 