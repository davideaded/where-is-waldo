import { Link } from "react-router-dom";
import Characters from './Characters.jsx';
import Chronometer from './Chronometer.jsx';
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
		<Chronometer />
		</div>
	)
	
}
