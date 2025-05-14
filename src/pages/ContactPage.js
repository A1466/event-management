import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guestCount: '',
    budget: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Conference',
    'Social Gathering',
    'Other',
  ];

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      content: [
        '123 Event Street',
        'Suite 456',
        'City, State 12345',
      ],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      content: [
        'Phone: (555) 123-4567',
        'Toll Free: 1-800-EVENT',
        'Fax: (555) 123-4568',
      ],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      content: [
        'info@eventmanagement.com',
        'support@eventmanagement.com',
        'careers@eventmanagement.com',
      ],
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Business Hours',
      content: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      guestCount: '',
      budget: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Let's Create Something Amazing Together
        </Typography>
      </Box>

      {/* Contact Information Cards */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                {info.content.map((line, idx) => (
                  <Typography key={idx} variant="body2" color="text.secondary">
                    {line}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Fill out the form below and we'll get back to you as soon as possible.
            We're excited to hear about your event plans!
          </Typography>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Event Type</InputLabel>
                      <Select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        label="Event Type"
                      >
                        {eventTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Preferred Date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expected Guest Count"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Budget Range"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $5,000 - $10,000"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Find Us
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Visit our office to discuss your event in person. We're conveniently located
            in the heart of the city.
          </Typography>
          <Card sx={{ height: 'calc(100% - 90px)' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                minHeight: 400,
                bgcolor: 'grey.200',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color="text.secondary">
                Map will be integrated here
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage; 