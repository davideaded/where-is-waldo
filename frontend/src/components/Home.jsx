import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Characters from './Characters.jsx';
import Chronometer from './Chronometer.jsx';
import SaveScore from './SaveScore.jsx';
import '../styles/home.css';

export default function Home() {
	useEffect(() => {
		fetch("http://localhost:3000").then(r => console.log(r.body));
	}, [])

	return (
		<div className="homemain">
			<h1> Find Them! </h1>	
			<h2> A where&apos;s Waldo game </h2>
			<Characters />
			<Link to="game">
				<button>Play</button>
			</Link>
		<SaveScore />
		</div>
	)
	
}
