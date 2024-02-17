import { useState } from 'react';
import '../styles/guessingarea.css';
import Modal from './Modal.jsx';

function GuessMenu({coords}) {
	const [modalState, setModalState] = useState({isOpen: false, isCorrect: false});
	const [showGuessMenu, setShowGuessMenu] = useState(false);
	const characters = ["Guts", "Bender", "Pyramid Head"];

  const handleCloseModal = () => {
		setModalState(p => {
			return { ...p, isOpen: false };
		});
  };

	const handleGuessClick = (e) => {
		const targetChar = e.target;
		targetChar.style.color = "green";

		// make call to the backend
		setShowGuessMenu(false);

		setModalState(p => {
			return { 
				...p,
				isOpen: true,
				isCorrect: false,
				textTitle: "Correct guess!",
				text: `You've found ${targetChar.innerText}!`
			};
		});
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
