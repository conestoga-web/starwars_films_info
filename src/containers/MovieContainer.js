import React from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { getMovieById } from '../modules/movie';

const { useEffect } = React;
const MovieContainer = ({
  getMovieById,
  movie,
  loadingMovie,
  id
}) => { 
  useEffect(() => {
    const fn = async () => {
      try {
        await getMovieById(id);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getMovieById, id]);
  return (
    <Movie
      movie={movie}
      loadingMovie={loadingMovie}
    />
  );
};

export default connect(
  ({ movie, loading }) => ({
    movie: movie.movie,
    loadingMovie: loading['movie/GET_MOVIE'],
  }),
  {
    getMovieById
  }
)(MovieContainer);
