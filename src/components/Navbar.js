import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
} from '@mui/material';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 700,
              flexGrow: 1,
            }}
          >
            Company Name
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/venue"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Venue
            </Button>
            <Button
              component={RouterLink}
              to="/suppliers"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Suppliers
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/media"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Media
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Contact Us
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              LOGIN
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              color="primary"
            >
              SIGNUP
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 