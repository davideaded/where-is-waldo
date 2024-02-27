import '../styles/allscores.css';
import { useState, useEffect } from 'react';
import { apiUrl } from '../config/apiConfig.js';

export default function AllScores() {
	const [scores, setScores] = useState([]);
	const [error, setError] = useState(false);

useEffect(() => {
  const url = `${apiUrl}/api/players/`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then((data) => { 
			const sortedScores = [...data].sort((a, b) => a.completion_time_in_seconds - b.completion_time_in_seconds);
			setScores(sortedScores)
		})

    .catch((e) => {
			console.error(e)
			setError(true);
		});
}, []);

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;

		const formattedTime = `${minutes}m${remainingSeconds}s`;

		return formattedTime;
	}

	return (
		<table>
			<thead>
				<tr>
					<th colSpan="3">Top 10</th>
				</tr>
			</thead>

			<tbody>
				{error ? <h2 style={{color: "red"}}>Could not fetch scores</h2> 
					:
				scores.map((row, index) => (
					<tr key={row.id}>
						<td>{index+1}</td>
						<td>{row.name}</td>
						<td>{formatTime(row.completion_time_in_seconds)}</td>
					</tr>
				))}

			</tbody>
		</table>
	)
}
