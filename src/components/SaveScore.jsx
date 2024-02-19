import { useState } from 'react';
import Modal from './Modal.jsx';
import AllScores from './AllScores.jsx';
import '../styles/savescore.css';

export default function SaveScore() {
	const [modalState, setModalState] = useState({isOpen: true, isCorrect: true});
	const [name, setName] = useState('');

  const handleCloseModal = () => {
		setModalState(p => {
			return { ...p, isOpen: false };
		});
  };

	const handleSubmition = () => {
		console.log(name);
	}

	const handleInputChange = (e) => {
		setName(e.target.value);
	}

	return (
		<Modal isOpen={modalState.isOpen} 
		onClose={handleCloseModal}
		correctGuess={modalState.isCorrect}>
			<h2>You made it in 00:20:30!</h2>
			<input 
				placeholder="enter your name"
				value={name}
				onChange={handleInputChange}
				name="name" 
				type="text" 
			/>
			<button className="submitNameBtn" onClick={() => handleSubmition()}>Submit</button>

			<p>{modalState.text}</p>
			<AllScores />
		</Modal>
	)
}
