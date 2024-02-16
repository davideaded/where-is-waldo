import { useState } from 'react';
import '../styles/guessingarea.css';

function GuessMenu({coords}) {
	const [showGuessMenu, setShowGuessMenu] = useState(false);
	const characters = ["waldo", "jhon", "doe"];

	const handleGuessClick = (e) => {
		console.log(e.target.innerText, coords);
		// make call to the backend
		setShowGuessMenu(false);
	}

	return (
		<div className="guessMenu"
			style={{ left: coords.x+59, top: coords.y}}>
			{showGuessMenu ?
				<ul>
					{characters.map((c, i) => (
						<li key={i} onClick={(e) => handleGuessClick(e)}>
							{c}
						</li>
					))}
				</ul>
				:
				<h1 onClick={() => setShowGuessMenu(true)}>⬇</h1>
			}
		</div>
	)
}

export default function GuessingArea({coords}) {
	return(
		<>
			<div className="targetArea"
				style={{ left: coords.x, top: coords.y }}>
			</div>
		<GuessMenu coords={coords} />
		</>
	)
}
