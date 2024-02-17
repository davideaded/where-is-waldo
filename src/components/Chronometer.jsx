import { useState, useEffect } from 'react';

export default function Chronometer() {
  const [time, setTime] = useState({ seconds: 0, milliseconds: 0 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
		if (isRunning) {

			const intervalId = setInterval(() => {
				setTime(prevTime => {
					const newMilliseconds = (prevTime.milliseconds + 100) % 1000;
					const newSeconds =
						prevTime.milliseconds + 100 >= 1000
							? prevTime.seconds + 1
							: prevTime.seconds;

					return { seconds: newSeconds, milliseconds: newMilliseconds };
				});
			}, 100);

			return () => clearInterval(intervalId);
		}
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time.seconds / 60);
    const seconds = time.seconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${time.milliseconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
}
