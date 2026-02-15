import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <div className="container">
      <h1>Movies</h1>

      <div className="grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <h3>{movie.title}</h3>
            <p>{movie.tagline}</p>
            <span>⭐ {movie.vote_average}/10</span>
          </div>
        ))}
      </div>
    </div>
  );
}
