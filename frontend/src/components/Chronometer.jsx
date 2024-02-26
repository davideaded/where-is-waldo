import { useState, useEffect } from 'react';

export default function Chronometer() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
		if (isRunning) {

			const intervalId = setInterval(() => {
				setTime(prevTime => {
					const newSeconds = prevTime.seconds + 1;
					const newMinutes = ((prevTime.seconds % 60) + 1) >= 60
						? prevTime.minutes + 1
						: prevTime.minutes;

					return { minutes: newMinutes, seconds: newSeconds };
				});
			}, 1000);

			return () => clearInterval(intervalId);
		}
  }, [isRunning]);

  const formatTime = (time) => {
		const timeSeconds = time.seconds % 60;
    return `${time.minutes}:${timeSeconds < 10 ? '0' : ''}${timeSeconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
}
