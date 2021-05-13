import { combineReducers } from 'redux';
import planet from './planet';
import planetList from './planetList';
import people from './people';
import peopleList from './peopleList';
import movie from './movie';
import movieList from './movieList';
import loading from './loading';

const rootReducer = combineReducers({
    planet,
    planetList,
    people,
    peopleList,
    movie,
    movieList,
    loading
  });

  export default rootReducer;