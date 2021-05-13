import { handleActions } from 'redux-actions';
import * as api from '../lib/api/apiMovies';
import createRequestThunk from '../lib/createRequestThunk';

const GET_MOVIES = 'movieList/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movieList/GET_MOVIES_SUCCESS';


export const getMovies = createRequestThunk(GET_MOVIES, api.getMovies);

const initialState = {
  movieList: null
};

const movieList = handleActions(
  {
    [GET_MOVIES_SUCCESS]: (state, action) => ({
      ...state,
      movieList: action.payload
    })
  },
  initialState
);

export default movieList;
