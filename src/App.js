import React, {Suspense} from 'react';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom';

//const AppBar = React.lazy(() => import('./components/AppBar'));
const Home = React.lazy(() => import('./pages/Home'));
const People = React.lazy(() => import('./pages/People'));
const PeopleDetail = React.lazy(() => import('./pages/PeopleDetail'));
const Planets = React.lazy(() => import('./pages/Planets'));
const PlanetDetail = React.lazy(() => import('./pages/PlanetDetail'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieDetail = React.lazy(() => import('./pages/MovieDetail'));

function App() {
  return (
    <Suspense fallback={<div>Welcome, loading...</div>}>
      <Router basename='/starwars_films_info'>
        <HashRouter>
          <Route component={Home} path="/" exact={true} />
          <Route component={People} path="/people" />
          <Route component={PeopleDetail} path="/person" />  
          <Route component={Planets} path="/planets" />
          <Route component={PlanetDetail} path="/planet" />
          <Route component={Movies} path="/movies" />
          <Route component={MovieDetail} path="/movie" />
        </HashRouter>
      </Router>
    </Suspense>
  );
};

export default App;
