import axios from 'axios';

export const getMovie = id =>
  axios.get(`https://swapi.dev/api/films/${id}/`);

export const getMovies = id =>
  axios.get(`https://swapi.dev/api/films/`);
