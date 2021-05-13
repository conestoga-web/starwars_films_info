import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiPeople';
import createRequestThunk from '../lib/createRequestThunk';

const GET_PEOPLE = 'peopleList/GET_PEOPLE';
const GET_PEOPLE_SUCCESS = 'peopleList/GET_PEOPLE_SUCCESS';


export const getPeople = createRequestThunk(GET_PEOPLE, api.getPeople);

const initialState = {
  peopleList: null
};

const peopleList = handleActions(
  {
    [GET_PEOPLE_SUCCESS]: (state, action) => ({
      ...state,
      peopleList: action.payload
    })
  },
  initialState
);

export default peopleList;
