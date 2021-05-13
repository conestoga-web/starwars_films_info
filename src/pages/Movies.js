import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar'; 

const Movies = () => {
  const title = "Movies";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <MovieListContainer />
      </section>
    </>
  );
};

export default Movies;
