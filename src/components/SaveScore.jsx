import { useState } from 'react';
import Modal from './Modal.jsx';
import AllScores from './AllScores.jsx';
import '../styles/savescore.css';
import { apiUrl } from '../config/apiConfig.js';

export default function SaveScore({time}) {
	const [modalState, setModalState] = useState({isOpen: true, isCorrect: true});
	const [name, setName] = useState('');
	const [postStatus, setPostStatus] = useState('');

  const handleCloseModal = () => {
		setModalState(p => {
			return { ...p, isOpen: false };
		});
  };

	const handleSubmition = () => {
		const url = `${apiUrl}/api/players`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ player: { name: name, completion_time_in_seconds: time } })
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok');
			})
			.then(() => {
				setPostStatus("Score saved!");
			})
			.catch((error) => {
				console.error('Error during POST request:', error);
				setPostStatus("Could not save status");
			});
	}

	const handleInputChange = (e) => {
		setName(e.target.value);
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;

		const formattedTime = `${minutes}m${remainingSeconds}s`;

		return formattedTime;
	}

	return (
		<Modal isOpen={modalState.isOpen} 
		onClose={handleCloseModal}
		correctGuess={modalState.isCorrect}>
			<h2>You made it in {formatTime(time)}!</h2>
			<input 
				placeholder="enter your name"
				value={name}
				onChange={handleInputChange}
				name="name" 
				type="text" 
				required
			/>
			<button className="submitNameBtn" onClick={() => handleSubmition()}>Submit</button>

			{postStatus && <p>{postStatus}</p>}
			<p>{modalState.text}</p>
			<AllScores />
		</Modal>
	)
}
