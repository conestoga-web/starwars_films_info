import React from 'react';
import PlanetListContainer from '../containers/PlanetListContainer';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar';

const Planets = () => {
  const title = "Planets";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <PlanetListContainer />
      </section>
    </>
  );
};

export default Planets;
