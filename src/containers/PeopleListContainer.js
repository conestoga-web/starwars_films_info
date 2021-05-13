import React from 'react';
import { connect } from 'react-redux';
import PeopleList from '../components/PeopleList';
import { getPeople } from '../modules/peopleList';

const { useEffect } = React;
const PeopleListContainer = ({
  getPeople,
  peopleList,
  loadingPeopleList
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPeople();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPeople]);
  return (
    <PeopleList
      peopleList={peopleList}
      loadingPeopleList={loadingPeopleList}
    />
  );
};

export default connect(
  ({ peopleList, loading }) => ({
    peopleList: peopleList.peopleList,
    loadingPeopleList: loading['peopleList/GET_PEOPLE']
  }),
  {
    getPeople
  }
)(PeopleListContainer);
