import React, { useState } from 'react';
import { db } from '../firebase';
import { Box, Button, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const addEvent = () => {
    if (eventName && eventDate && eventTime) {
      const newEvent = {
        id: uuidv4(),
        name: eventName,
        date: eventDate,
        time: eventTime,
      };
      db.addEvent(newEvent);
      setEventName('');
      setEventDate('');
      setEventTime('');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Event
      </Typography>
      <TextField
        label="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Event Date"
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Event Time"
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={addEvent}>
        Add Event
      </Button>
    </Box
