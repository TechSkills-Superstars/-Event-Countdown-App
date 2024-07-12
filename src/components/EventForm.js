import React, { useState } from 'react';
import { db } from '../firebase';
import { TextField, Button, Box } from '@mui/material';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('events').add({
      name,
      date,
      time
    });
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Event Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        type="date"
        label="Date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <TextField
        type="time"
        label="Time"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Add Event
      </Button>
    </Box>
  );
};

export default EventForm;
