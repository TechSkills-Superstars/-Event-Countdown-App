import React from 'react';
import CountdownTimer from './CountdownTimer';

const EventList = ({ events, deleteEvent }) => (
  <div>
    <h2>Upcoming Events</h2>
    {events.map((event, index) => (
      <div key={index}>
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <CountdownTimer targetDate={`${event.date}T${event.time}`} />
        <button onClick={() => deleteEvent(index)}>Delete</button>
      </div>
    ))}
  </div>
);

export default EventList;
