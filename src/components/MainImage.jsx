import waldo from '../assets/waldo.png';
import '../styles/mainimage.css';
import { useState } from 'react';

export default function MainImage() {
	const [square, setSquare] = useState({});
	const squareSize = 56;
	const moonCoordinates = { x: 284, y: 170 };

	const handleClick = (e) => {
		const {pageX, pageY} = e;
		const top = pageY - squareSize/2;
		const left = pageX - squareSize/2;

		if (square.coordinates && isCoordinateInsideSquare(left, top, square)) {
			console.log(true);
			return true;
		}

		console.log(pageX, pageY);
		setSquare((p) => ({
					...p,
					coordinates: { left, top },
					element: (
						<div className="targetArea" style={{ left: left, top: top }}>
							{pageX}, {pageY}
						</div>
					),
		}));
	}

	const isCoordinateInsideSquare = (x, y, square) => {
		const squareLeft = square.coordinates.left;
		const squareTop = square.coordinates.top;

		return (
			x >= squareLeft &&
			x <= squareLeft + squareSize &&
			y >= squareTop &&
			y <= squareTop + squareSize
		);
	};

	return (
		<>
			<div className="container"  >
				{square && square.element}
				<img src={waldo} onClick={(e) => handleClick(e)}/>
			</div>
		</>
	)
}
