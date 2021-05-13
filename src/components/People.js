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

function People({ people, loadingPeople }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section>
      <br />
      {loadingPeople && 'Loading...'}
      {!loadingPeople && people && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {bull}{people.name}{bull}
            </Typography>
            <br /><br />
            <Typography variant="body2" component="p" color="textSecondary">
              Height
            </Typography>
            <Typography variant="body1" component="p">
              {people.height}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Mass
            </Typography>
            <Typography variant="body1" component="p">
              {people.mass}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Hair Color
            </Typography>
            <Typography variant="body1" component="p">
              {people.hair_color}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Skin Color
            </Typography>
            <Typography variant="body1" component="p">
              {people.skin_color}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Gender
            </Typography>
            <Typography variant="body1" component="p">
              {people.gender}
            </Typography>
            <br />
            <Typography variant="body2" component="p" color="textSecondary">
              Birth Year
            </Typography>
            <Typography variant="body1" component="p">
              {people.birth_year}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default People;
