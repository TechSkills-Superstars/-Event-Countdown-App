// Initialize events from local storage or use default events
const initialEvents = JSON.parse(localStorage.getItem('events')) || [
  {
    id: '1',
    name: 'Birthday Party',
    date: '2024-07-25',
    time: '18:00',
  },
  {
    id: '2',
    name: 'Conference',
    date: '2024-08-15',
    time: '09:00',
  },
  {
    id: '3',
    name: 'Concert',
    date: '2024-09-01',
    time: '20:00',
  },
];

let events = initialEvents;

const db = {
  collection: (name) => ({
    onSnapshot: (callback) => {
      callback({
        forEach: (fn) => events.forEach((event) => fn({ id: event.id, data: () => event })),
      });
    },
    doc: (id) => ({
      delete: () => {
        events = events.filter((event) => event.id !== id);
        localStorage.setItem('events', JSON.stringify(events));
      },
    }),
    get: () => ({
      forEach: (fn) => events.forEach((event) => fn({ id: event.id, data: () => event })),
    }),
  }),
  addEvent: (newEvent) => {
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
  },
  getEvents: () => events,
};

export { db };
