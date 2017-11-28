import * as React from 'react';

import { Link } from 'found';

import { Grid } from 'material-ui';
import { PersonCard } from './PersonCard';

export interface IBrowseScreenProps {
  data: any;
  params: any;
  router: any;
}

export class BrowseScreen extends React.Component<IBrowseScreenProps> {
  public render() {
    const { data, params: { gender }, router } = this.props;

    return (
      <Grid container justify="center">
        <Grid item  xs={ 12 } sm={ 6 } lg={ 3 }>
          <PersonCard { ...{ data, gender, classes: null, router } }/>
        </Grid>
      </Grid>
    );
  }
}
