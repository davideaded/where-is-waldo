import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Characters from './Characters.jsx';
import AllScores from './AllScores.jsx';
import '../styles/home.css';

export default function Home() {

	return (
		<div className="homemain">
			<h1> Find Them! </h1>	
			<h2> A where&apos;s Waldo game </h2>
			<Characters />
			<Link to="game">
				<button>Play</button>
			</Link>
			<AllScores />
		</div>
	)
	
}
