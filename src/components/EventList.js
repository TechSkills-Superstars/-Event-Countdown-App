import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import CountdownTimer from './CountdownTimer';
import { Box, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('events').onSnapshot(snapshot => {
      const eventsData = [];
      snapshot.forEach(doc => eventsData.push({ ...doc.data(), id: doc.id }));
      setEvents(eventsData);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    events.forEach(event => {
      const eventDate = new Date(`${event.date}T${event.time}`);
      const now = new Date();
      if (eventDate > now && eventDate - now <= 24 * 60 * 60 * 1000) {
        toast.info(`Reminder: ${event.name} is happening within the next 24 hours!`);
      }
    });
  }, [events]);

  const deleteEvent = (id) => {
    db.collection('events').doc(id).delete();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      {events.map(event => (
        <Box key={event.id} sx={{ mb: 2 }}>
          <Typography variant="h6">{event.name}</Typography>
          <Typography>Date: {event.date}</Typography>
          <Typography>Time: {event.time}</Typography>
          <CountdownTimer targetDate={`${event.date}T${event.time}`} />
          <Button variant="outlined" color="secondary" onClick={() => deleteEvent(event.id)}>
            Delete
          </Button>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <FacebookShareButton url={window.location.href} quote={event.name}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={event.name}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href} title={event.name}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default EventList;
