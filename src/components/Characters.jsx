import bender from '../assets/bender.webp';
import guts from '../assets/guts.png';
import phead from '../assets/phead.webp';
import '../styles/characters.css';

export default function Characters() {
	const characters = [bender, guts, phead];
	const charNames = ["Bender", "Guts", "Pyramid Head"];

	return (
		<div className="chars">
			{characters.map((c, i) => (
				<div key={i}>
					<img src={c} alt={`character-${c}`} />
					<h2>{charNames[i]}</h2>
				</div>
			))}
		</div>
	)
}
