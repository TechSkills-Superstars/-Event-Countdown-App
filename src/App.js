import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import PastEvents from './components/PastEvents';
import Introduction from './components/Introduction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Event Countdown App
        </Typography>
        <Introduction />
        <EventForm />
        <EventList />
        <PastEvents />
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default App;
