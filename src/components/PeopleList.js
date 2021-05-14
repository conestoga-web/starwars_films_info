import React from 'react';
//import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonIcon from '@material-ui/icons/Person';

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

/* const PeopleItem = ({ people, id }) => {
    const { name } = people;
    return (
        <h2><Link to={`/person/${id}/`}>{name}</Link></h2>
    );
}; */

function PeopleList({ peopleList, loadingPeopleList}) {
  const classes = useStyles();

  return (
    <section>
      <br />
      {loadingPeopleList && 'Loading...'}
      {!loadingPeopleList && peopleList && (
        <List className={classes.root} subheader={<li />}>
        {peopleList.map((people, sectionId) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>
                {/* <MovieItem movie = {movie} id = {sectionId + 1}/> */}
                <ListItemLink href={`/starwars_films_info/#/person/${sectionId + 1}`}>
                  <PersonIcon style={{ marginRight: "0.5em" }} /><ListItemText primary={people.name} />
                </ListItemLink>
              </ListSubheader>  
            </ul>
          </li>
      ))}
    </List>
      )}
    </section>
  );/*  */
};

export default PeopleList;
