import '../styles/allscores.css';
import { useState, useEffect } from 'react';

export default function AllScores() {
	const [scores, setScores] = useState([]);

useEffect(() => {
  const url = "http://localhost:3000/api/players";

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
    .catch((error) => console.error(error));
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
				{scores.map((row, index) => (
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
