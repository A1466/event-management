import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Adithya K',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in event planning, Adithya founded our company with a vision to create unforgettable moments.',
      image: '/images/team/sarah.jpg',
      expertise: ['Strategic Planning', 'Team Leadership', 'Client Relations'],
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      bio: 'Michael brings his artistic vision and innovative ideas to every event, ensuring unique and memorable experiences.',
      image: '/images/team/michael.jpg',
      expertise: ['Event Design', 'Brand Integration', 'Creative Solutions'],
    },
    {
      name: 'Emily Rodriguez',
      role: 'Event Operations Manager',
      bio: 'Emily oversees all event operations, ensuring flawless execution and client satisfaction.',
      image: '/images/team/emily.jpg',
      expertise: ['Project Management', 'Vendor Relations', 'Quality Control'],
    },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Event Management Company',
      organization: 'City Business Awards',
    },
    {
      year: '2022',
      title: 'Excellence in Customer Service',
      organization: 'Event Industry Association',
    },
    {
      year: '2021',
      title: 'Most Innovative Event Solutions',
      organization: 'Digital Events Awards',
    },
  ];

  const values = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from planning to execution.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to bring their vision to life.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'We constantly innovate to create unique and memorable experiences.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Passion',
      description: 'Our passion for creating amazing events drives everything we do.',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Creating Unforgettable Moments Since 2010
        </Typography>
      </Box>

      {/* Company Story */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Founded in 2010, our event management company has grown from a small local business
              to a nationally recognized leader in event planning and execution. We've successfully
              organized thousands of events, from intimate gatherings to large-scale corporate
              functions.
            </Typography>
            <Typography variant="body1" paragraph>
              Our journey has been marked by continuous growth, innovation, and an unwavering
              dedication to creating exceptional experiences. We believe that every event is an
              opportunity to create something extraordinary.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Over 1,000 successful events" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="98% client satisfaction rate" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Award-winning service" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-hero.jpg"
              alt="Company History"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Company Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Our Values
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                  flexGrow: 1
                }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ 
                      width: 140, 
                      height: 140, 
                      mx: 'auto', 
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="primary" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 500,
                      mb: 2
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.6
                    }}
                  >
                    {member.bio}
                  </Typography>
                  <Divider sx={{ width: '100%', my: 2 }} />
                  <Typography 
                    variant="subtitle2" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 500,
                      mb: 2
                    }}
                  >
                    Areas of Expertise
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1, 
                      justifyContent: 'center',
                      mt: 'auto'
                    }}
                  >
                    {member.expertise.map((skill, idx) => (
                      <Typography
                        key={idx}
                        variant="caption"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.75,
                          borderRadius: 2,
                          fontWeight: 500,
                          fontSize: '0.75rem'
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Our Achievements
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {achievement.organization}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 2 }}>
                    {achievement.year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage; 