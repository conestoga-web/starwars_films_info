import React from 'react';
import { connect } from 'react-redux';
import Planet from '../components/Planet';
import { getPlanetById } from '../modules/planet';

const { useEffect } = React;
const PlanetContainer = ({
  getPlanetById,
  planet,
  loadingPlanet,
  id
}) => { 
  useEffect(() => {
    const fn = async () => {
      try {
        await getPlanetById(id);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPlanetById, id]);
  return (
    <Planet
      planet={planet}
      loadingPlanet={loadingPlanet}
    />
  );
};

export default connect(
  ({ planet, loading }) => ({
    planet: planet.planet,
    loadingPlanet: loading['planet/GET_PLANET'],
  }),
  {
    getPlanetById
  }
)(PlanetContainer);
