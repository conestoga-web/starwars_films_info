import React from 'react';
import { connect } from 'react-redux';
import People from '../components/People';
import { getPeopleById } from '../modules/people';

const { useEffect } = React;
const PeopleContainer = ({
  getPeopleById,
  people,
  loadingPeople,
  id
}) => { 
  useEffect(() => {
    const fn = async () => {
      try {
        await getPeopleById(id);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPeopleById, id]);
  return (
    <People
      people={people}
      loadingPeople={loadingPeople}
    />
  );
};

export default connect(
  ({ people, loading }) => ({
    people: people.people,
    loadingPeople: loading['people/GET_PEOPLE'],
  }),
  {
    getPeopleById
  }
)(PeopleContainer);
