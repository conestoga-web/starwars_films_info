import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiPlanets';
import createRequestThunk from '../lib/createRequestThunk';

const GET_PLANETS = 'planetList/GET_PLANETS';
const GET_PLANETS_SUCCESS = 'planetList/GET_PLANETS_SUCCESS';


export const getPlanets = createRequestThunk(GET_PLANETS, api.getPlanets);

const initialState = {
  planetList: null
};

const planetList = handleActions(
  {
    [GET_PLANETS_SUCCESS]: (state, action) => ({
      ...state,
      planetList: action.payload
    })
  },
  initialState
);

export default planetList;
