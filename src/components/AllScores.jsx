import '../styles/allscores.css';

export default function AllScores() {
	const scores = [
		{
			id: 0,
			name: "jao",
			time: 5
		},
		{
			id: 1,
			name: "calleri",
			time: 3
		},
		{
			id: 2,
			name: "luciano",
			time: 4
		},
		{
			id: 0,
			name: "jao",
			time: 5
		},
		{
			id: 1,
			name: "calleri",
			time: 3
		},
		{
			id: 2,
			name: "luciano",
			time: 4
		},
		{
			id: 0,
			name: "jao",
			time: 5
		},
		{
			id: 1,
			name: "calleri",
			time: 3
		},
		{
			id: 2,
			name: "luciano",
			time: 4
		},
		{
			id: 0,
			name: "jao",
			time: 5
		},
		{
			id: 1,
			name: "calleri",
			time: 3
		},
		{
			id: 2,
			name: "luciano",
			time: 4
		},
	];

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
						<td>{row.time}</td>
					</tr>
				))}

			</tbody>
		</table>
	)
}
