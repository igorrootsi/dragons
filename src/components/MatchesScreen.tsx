import * as React from 'react';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import { matches } from '../database';

import { Grid } from 'material-ui';
import { IPerson } from '../interfaces/IPerson';

function Person({ person }: { person: IPerson }) {
  return (
    <Grid item>
      <Card style={ { maxWidth: 250 } }>
        <CardMedia
          style={ { height: 200 } }
          image={ person.image }
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography type="headline" component="h2">
            { person.name }
          </Typography>

          <Typography component="p">
            { person.description }
          </Typography>
        </CardContent>

        <CardActions>
          <Button dense color="primary">
            Chat
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export class MatchesScreen extends React.Component {
  public render() {
    return (
      <div style={ { padding: 20 } }>
        <Grid container>
          { matches.map((match) => <Person key={ match.id } person={ match } />) }
        </Grid>
      </div>
    );
  }
}
