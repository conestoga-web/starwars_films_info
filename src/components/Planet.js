import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Planet({ planet, loadingPlanet }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingPlanet && 'Loading...'}
      {!loadingPlanet && planet && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}{planet.name}{bull}
            </Typography>
            <br /><br />
            <Typography variant="body2" component="p" color="textSecondary">
              Terrain
            </Typography>
            <Typography variant="body1" component="p">
              {planet.terrain}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Population
            </Typography>
            <Typography variant="body1" component="p">
              {planet.population}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default Planet;
