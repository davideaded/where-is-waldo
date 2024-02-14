import waldo from '../assets/waldo.png';
import '../styles/mainimage.css';
import { useState } from 'react';

export default function MainImage() {
	const [square, setSquare] = useState(null);
	const moonCoordinates = { x: 284, y: 170 };

	const handleClick = (e) => {
		const {pageX, pageY} = e;
		const top = pageY - 50/2;
		const left = pageX - 50/2;

		console.log(pageX, pageY);
		setSquare(<div className="targetArea" style={{ left: left, top: top }}>{pageX}, {pageY}</div>);
	}

	return (
		<>
			<div className="container">
				{square && square}
				<img onClick={(e) => handleClick(e)} src={waldo} />
			</div>
		</>
	)
}
