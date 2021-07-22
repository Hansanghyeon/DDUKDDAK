import { useState } from 'react';
import useInterval from '@hook/useInterval'
import dayjs from 'dayjs';
// components
import ToggleMode from '@components/toggle/Mode'

const Timer: React.FC = () => {
  const [duration, setDuration] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [overTime, setOverTime] = useState(false);

  const endEvent = () => {
    setIsRunning(false);
  }

  const startEvent = () => {
    setIsRunning(!isRunning);
  }

  useInterval(() => {
    setDuration(duration - 1)
    if (duration === 1 && !overTime) endEvent();
  }, isRunning ? 1000 : null);

  // Handle
  const rangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  }
  const startHandle = startEvent;

  const toggleHandle = (toogleChecked: boolean) => {
    setOverTime(toogleChecked);
  }

  return (
    <div>
      {!(duration < 0) || '🔥'} {dayjs.duration(duration > 0 ? duration : (duration * -1), 'seconds').format('mm:ss')}
      <input type="range" max="7200" min="600" step="60" value={duration} onChange={rangeHandle} />
      <ToggleMode getChecked={toggleHandle} offLabel="normal mode" onLabel="overtime mode" />
      <button type="button" onClick={startHandle}>{isRunning ? 'stop' : 'start'}</button>
    </div>
  )
}

export default Timer;