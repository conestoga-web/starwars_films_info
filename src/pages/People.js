import React from 'react';
import PeopleListContainer from '../containers/PeopleListContainer';
import './Home.css'; 
import ButtonAppBar from '../components/ButtonAppBar';

const People = () => {
  const title = "People";
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <PeopleListContainer />
      </section>
    </>
  );
};

export default People;
