import React from 'react';
import './Home.css'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../components/ButtonAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  const title = "Star Wars Explorer";
  const classes = useStyles();
  return (
    <>
      <header><ButtonAppBar title={title} /></header>
      <section className="container">
        <div className={classes.root}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button href="/starwars_films_info/#/people">People</Button><br />
                <Button href="/starwars_films_info/#/movies">Movies</Button><br />
                <Button href="/starwars_films_info/#/planets">Planets</Button>
            </ButtonGroup>
        </div>
      </section>
    </>  
  );
}

export default Home;