import React from "react";

const Movie = ({ coverImg, title, summary, genres, id }) => {
	return (
		<div id={id}>
			<img src={coverImg} />
			<div>{title}</div>
			<div>{summary}</div>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
};

export default Movie;
