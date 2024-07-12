import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatDistanceToNow(new Date(targetDate), { addSuffix: true }));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return <div>Time left: {timeLeft}</div>;
};

export default CountdownTimer;
