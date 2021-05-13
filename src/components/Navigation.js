import React from 'react';
//import { Link } from 'react-router-dom';
import './Navigation.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Navigation() {
  return (
    <div className="nav">
      <ListItemLink href="/">
          <ListItemText primary="Home" />
      </ListItemLink>
      <ListItemLink href="/people">
          <ListItemText primary="People" />
      </ListItemLink>
      <ListItemLink href="/planets">
          <ListItemText primary="Planets" />
      </ListItemLink>
      <ListItemLink href="/movies">
          <ListItemText primary="Movies" />
      </ListItemLink>
    </div>
  );
}

export default Navigation;