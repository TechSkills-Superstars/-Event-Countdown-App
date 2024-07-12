import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Box, Typography } from '@mui/material';

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const events = db.getEvents();
    const now = new Date();
    const pastEvents = events.filter(event => new Date(`${event.date}T${event.time}`) < now);
    setPastEvents(pastEvents);
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Past Events
      </Typography>
      {pastEvents.map(event => (
        <Box key={event.id} sx={{ mb: 2 }}>
          <Typography variant="h6">{event.name}</Typography>
          <Typography>Date: {event.date}</Typography>
          <Typography>Time: {event.time}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PastEvents;
