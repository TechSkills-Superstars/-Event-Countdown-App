import React from 'react';
import { Box, Typography } from '@mui/material';

const Introduction = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="body1" paragraph>
        Welcome to the Event Countdown App! This app allows you to track your upcoming events, set countdown timers, receive reminders, and share your events on social media.
      </Typography>
      <Typography variant="body1" paragraph>
        Features:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>Track upcoming events</li>
        <li>Countdown timers for each event</li>
        <li>Set reminders for your events</li>
        <li>Social sharing options</li>
        <li>Persistent data storage</li>
      </Typography>
    </Box>
  );
};

export default Introduction;
