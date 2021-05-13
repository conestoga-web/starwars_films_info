import React from 'react';
import { connect } from 'react-redux';
import PlanetList from '../components/PlanetList';
import { getPlanets } from '../modules/planetList';

const { useEffect } = React;
const PlanetListContainer = ({
  getPlanets,
  planetList,
  loadingPlanetList
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPlanets();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPlanets]);
  return (
    <PlanetList
      planetList={planetList}
      loadingPlanetList={loadingPlanetList}
    />
  );
};

export default connect(
  ({ planetList, loading }) => ({
    planetList: planetList.planetList,
    loadingPlanetList: loading['planetList/GET_PLANETS']
  }),
  {
    getPlanets
  }
)(PlanetListContainer);
