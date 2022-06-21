import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
			)
			.then((res) => {
				setMovies(res.data.data.movies);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>Movie App</h1>
			{loading ? (
				<div>loading...</div>
			) : (
				movies.map((movie) => (
					<Movie
						id={movie.id}
						coverImg={movie.medium_cover_image}
						title={movie.title}
						summary={movie.summary}
						genres={movie.genres}
					/>
				))
			)}
		</div>
	);
}

export default App;
