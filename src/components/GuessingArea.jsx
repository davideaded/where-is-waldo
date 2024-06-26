import { useState } from 'react';
import '../styles/guessingarea.css';
import Modal from './Modal.jsx';
import SaveScore from './SaveScore.jsx';
import { apiUrl } from '../config/apiConfig.js';

export default function GuessingArea({coords, time}) {
	const [modalState, setModalState] = useState({isOpen: false, isCorrect: false});
	const [showGuessMenu, setShowGuessMenu] = useState(false);
	const [showError, setShowError] = useState(false);
	const [characters, setCharacters] = useState(["Guts", "Bender", "Pyramid Head"]);

  const handleCloseModal = () => {
		setModalState(p => {
			return { ...p, isOpen: false };
		});
  };

	const fetchGuessResponse = async (character, coords) => {
		const { guessCoordsX, guessCoordsY } = coords;
		const url = `${apiUrl}/api/guesses?character_guess=${character}&x=${guessCoordsX}&y=${guessCoordsY}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;

		} catch (error) {
			console.error("Error:", error);
			setShowError(true);
		}
	}

	const handleGuessClick = async (e) => {
		const charName = e.target.innerText;
		const guessCoordsX = Math.round(coords.x * 1000) / 1000;
		const guessCoordsY = coords.y;

		const isGuessCorrect = await fetchGuessResponse(charName, {guessCoordsX, guessCoordsY});

		if (isGuessCorrect) {
			setCharacters(p => { return [...p].filter(c => c !== charName) });
		}

		setShowGuessMenu(false);
		setModalState(p => {
			return {
				...p,
				isOpen: true,
				isCorrect: isGuessCorrect,
				textTitle: isGuessCorrect ? "Correct guess!" : "Incorrect Guess!",
				text: isGuessCorrect ? `You've found ${e.target.innerText}!` : "Try Again!"
			};
		});
	}

	if (characters[0] === undefined) {
		return <SaveScore time={time.seconds} />
	}

	return (

		<>
			<div className="targetArea"
				style={{ left: coords.x, top: coords.y }}>
			</div>
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
				<>
				<h1 onClick={() => setShowGuessMenu(true)}>⬇</h1>

				<Modal isOpen={modalState.isOpen} 
					onClose={handleCloseModal}
					correctGuess={modalState.isCorrect}>
						<h2>{modalState.textTitle}</h2>
						<p>{modalState.text}</p>
				</Modal>
				</>
			}
			</div>
		</>
	)
}
