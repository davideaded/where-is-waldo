import waldo from '../assets/waldo.png';
import '../styles/mainimage.css';
import { useState } from 'react';

export default function MainImage() {
	const [square, setSquare] = useState({});
	const squareSize = 56;
	const moonCoordinates = { x: 246, y: 134 };


	const handleClick = (e) => {
		const rect = e.target.getBoundingClientRect();
		const {clientX, clientY} = e;
		const {x, y} = getCoordinates(clientX, clientY, rect);


		if (isCoordinateInsideSquare(x, y, moonCoordinates)) {
			setSquare({});
			return;
		}

		console.log(x, y);

		setSquare((p) => ({
					...p,
					coordinates: { x, y },
					element: (
						<div className="targetArea" style={{ left: x, top: y }}>
						</div>
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

  const isCoordinateInsideSquare = (x, y, square) => {
		square.x -= squareSize/2;
		square.y -= squareSize/2;

    return (
      x >= square.x &&
      x <= square.x + squareSize &&
      y >= square.y &&
      y <= square.y + squareSize
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
