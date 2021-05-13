import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiPlanets';
import createRequestThunk from '../lib/createRequestThunk';

const GET_PLANET = 'planet/GET_PLANET';
const GET_PLANET_SUCCESS = 'planet/GET_PLANET_SUCCESS';

//export const getPlanet = createAction(GET_PLANET, id => id);

export const getPlanetById = createRequestThunk(GET_PLANET, api.getPlanet);

const initialState = {
  planet: null
};

const planet = handleActions(
  {
    [GET_PLANET_SUCCESS]: (state, action) => ({
      ...state,
      planet: action.payload
    })
  },
  initialState
);

export default planet;
