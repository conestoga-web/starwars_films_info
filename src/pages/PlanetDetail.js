import React from 'react';
import PlanetContainer from '../containers/PlanetContainer';
import { Route } from 'react-router-dom';
import './Home.css';
import ButtonAppBar from '../components/ButtonAppBar';

const PlanetDetail = () => {
  const title = "Planet";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <Route
          path="/planet/:id"
          render={({ match }) => <PlanetContainer id={match.params.id} />}
        />  
      </section>
    </>
  );
};

export default PlanetDetail;