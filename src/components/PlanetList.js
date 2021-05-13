import React from 'react';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

/* const PlanetItem = ({ planet, id }) => {
    const { name } = planet;
    return (
        <h2><Link to={`/planet/${id}`}>{name}</Link></h2>
    );
}; */

function PlanetList({ planetList, loadingPlanetList}) {
  const classes = useStyles();

  return (
    <section>
      <br />
      {loadingPlanetList && 'Loading...'}
      {!loadingPlanetList && planetList && (
        <List className={classes.root} subheader={<li />}>
          {planetList.map((planet, sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>
                  {/* <MovieItem movie = {movie} id = {sectionId + 1}/> */}
                  <ListItemLink href={`/planet/${sectionId + 1}`}>
                  <StarIcon style={{ marginRight: "0.5em" }} /><ListItemText primary={planet.name} />
                  </ListItemLink>
                </ListSubheader>  
              </ul>
            </li>
        ))}
      </List>
      )}
    </section>
  );
};

export default PlanetList;
