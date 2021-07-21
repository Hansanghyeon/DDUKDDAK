import React, { useState } from 'react';
import useInterval from '@hook/useInterval'
import dayjs from 'dayjs';

const Timer: React.FC = () => {
  const [duration, setDuration] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);


  const endEvent = () => {
    setIsRunning(false);
  }

  const startEvent = () => {
    setIsRunning(!isRunning);
  }

  useInterval(() => {
    setDuration(duration - 60)
    if (duration === 60) endEvent();
  }, isRunning ? 1000 : null);

  // Handle
  const rangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  }
  const startHandle = startEvent;

  return (
    <div>
      {dayjs.duration(duration, 'seconds').asMinutes()} 분
      <input type="range" max="7200" min="600" step="60" value={duration} onChange={rangeHandle} />
      <button type="button" onClick={startHandle}>{isRunning ? 'stop' : 'start'}</button>
    </div>
  )
}

export default Timer;