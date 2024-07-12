import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './styles.css';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <div className="App">
      <h1>Event Countdown App</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
