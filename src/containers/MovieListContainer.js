import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';
import { getMovies } from '../modules/movieList';

const { useEffect } = React;
const MovieListContainer = ({
  getMovies,
  movieList,
  loadingMovieList
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getMovies();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getMovies]);
  return (
    <MovieList
      movieList={movieList}
      loadingMovieList={loadingMovieList}
    />
  );
};

export default connect(
  ({ movieList, loading }) => ({
    movieList: movieList.movieList,
    loadingMovieList: loading['movieList/GET_MOVIES']
  }),
  {
    getMovies
  }
)(MovieListContainer);
