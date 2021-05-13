import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiPeople';
import createRequestThunk from '../lib/createRequestThunk';

const GET_PERSON = 'people/GET_PERSON';
const GET_PERSON_SUCCESS = 'people/GET_PERSON_SUCCESS';

//export const getPlanet = createAction(GET_PLANET, id => id);

export const getPeopleById = createRequestThunk(GET_PERSON, api.getPerson);

const initialState = {
  people: null
};

const people = handleActions(
  {
    [GET_PERSON_SUCCESS]: (state, action) => ({
      ...state,
      people: action.payload
    })
  },
  initialState
);

export default people;
