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
		const url = 'http://localhost:3000/api/players'

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ player: { name: name, completion_time_in_seconds: 220 } })
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok');
			})
			.then((data) => {
				console.log('POST request successful');
			})
			.catch((error) => {
				console.error('Error during POST request:', error);
			});
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
