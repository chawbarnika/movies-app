import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovie(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>{movie.title}</h1>

      {Object.entries(movie).map(([key, value]) => {
        if (key === "release_date") {
          value = new Date(value).toLocaleDateString();
        }

        if (key === "runtime") {
          value = `${value} minutes`;
        }

        return (
          <p key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </p>
        );
      })}
    </div>
  );
}
