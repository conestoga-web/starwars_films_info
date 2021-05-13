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

function Movie({ movie, loadingMovie }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingMovie && 'Loading...'}
      {!loadingMovie && movie && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}{movie.title}{bull}
            </Typography>
            <br /><br />
            <Typography variant="body2" component="p" color="textSecondary">
              Director
            </Typography>
            <Typography variant="body1" component="p">
              {movie.director}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Producer
            </Typography>
            <Typography variant="body1" component="p">
              {movie.producer}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Release Date
            </Typography>
            <Typography variant="body1" component="p">
              {movie.release_date}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default Movie;
