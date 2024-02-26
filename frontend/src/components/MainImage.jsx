import waldo from '../assets/waldo2.jpg';
import '../styles/mainimage.css';
import { useState } from 'react';
import GuessingArea from './GuessingArea.jsx';
import Chronometer from './Chronometer.jsx';

export default function MainImage() {
	const [square, setSquare] = useState({});
	const squareSize = 56;


	const handleClick = (e) => {
		const rect = e.target.getBoundingClientRect();
		const {clientX, clientY} = e;
		const {x, y} = getCoordinates(clientX, clientY, rect);

		setSquare((p) => ({
					...p,
					coordinates: { x, y },
					element: (
						<GuessingArea coords={{x, y}}/>
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
					<Chronometer />
				</div>
				{square && square.element}
				<img src={waldo} onClick={(e) => handleClick(e)}/>
			</div>
		</>
	)
}
