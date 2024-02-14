import waldo from '../assets/waldo.png';
import '../styles/mainimage.css';
import { useState } from 'react';

export default function MainImage() {
	const [square, setSquare] = useState(null);
	const moonCoordinates = { x: 284, y: 170 };

	const handleClick = (e) => {
		const {pageX, pageY} = e;
		console.log(pageX, pageY);
		setSquare(<div className="targetArea" style={{ left: pageX, top: pageY }}>{pageX}, {pageY}</div>);
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
