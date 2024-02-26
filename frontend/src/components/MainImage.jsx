import waldo from '../assets/waldo2.jpg';
import '../styles/mainimage.css';
import { useState, useEffect } from 'react';
import GuessingArea from './GuessingArea.jsx';

export default function MainImage() {
	const [square, setSquare] = useState({});
	const squareSize = 56;
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

	useEffect(() => {
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
}, []);

  const formatTime = (time) => {
		const timeSeconds = time.seconds % 60;
    return `${time.minutes}:${timeSeconds < 10 ? '0' : ''}${timeSeconds}`;
  };

	const handleClick = (e) => {
		const rect = e.target.getBoundingClientRect();
		const {clientX, clientY} = e;
		const {x, y} = getCoordinates(clientX, clientY, rect);

		setSquare((p) => ({
					...p,
					coordinates: { x, y },
					element: (
						<GuessingArea coords={{x, y}} time={time}/>
					),
		}));
	}
	const getCoordinates = (clientX, clientY, clientRect) => {
		const relativeX = clientX - clientRect.left;
		const relativeY = clientY - clientRect.top;

		const top = relativeY - squareSize/2;
		const left = relativeX - squareSize/2;

		const {x, y} = checkImageBorder(left, top, clientRect);

		return {x, y};
	}

  const checkImageBorder = (x, y, rect) => {
    x = x < 0 ? 0 : x > rect.width - squareSize ? rect.width - squareSize : x;
    y = y < 0 ? 0 : y > rect.height - squareSize ? rect.height - squareSize : y;

    return { x, y };
  };

	return (
		<>
			<div className="container"  >
				<div className="chronometer">
					<h1>Timer</h1>
					<p>{formatTime(time)}</p>
				</div>
				{square && square.element}
				<img src={waldo} onClick={(e) => handleClick(e)}/>
			</div>
		</>
	)
}
