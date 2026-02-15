const BASE_URL = "http://localhost:5000/api";

export const getMovies = () =>
  fetch(`${BASE_URL}/movies`).then(res => res.json());

export const getMovie = id =>
  fetch(`${BASE_URL}/movies/${id}`).then(res => res.json());
