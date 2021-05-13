import React from 'react';
import PeopleContainer from '../containers/PeopleContainer';
import { Route } from 'react-router-dom';
import './Home.css'; 
import ButtonAppBar from '../components/ButtonAppBar';

const PeopleDetail = () => {
  const title = "Person";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <Route
          path="/person/:id"
          render={({ match }) => <PeopleContainer id={match.params.id} />}
        />  
      </section>
    </>
  );
};

export default PeopleDetail;