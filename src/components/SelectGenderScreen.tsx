import * as React from 'react';

import { Grid, Typography } from 'material-ui';
import { Block, Face, TagFaces } from 'material-ui-icons';
import Button from 'material-ui/Button';

export interface ISelectGenderScreenProps {
  router: any;
}

export class SelectGenderScreen extends React.Component<ISelectGenderScreenProps> {
  public render() {
    return (
      <Grid container justify="center">
        <Grid item xs={ 12 } sm={ 6 } lg={ 4 }>
          <Typography type="display1" align="center">
            Who do You
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <Button fab onClick={ this.navigateTo.bind(this, 'boy') }>
                <Face />
              </Button>
            </Grid>

            <Grid item>
              <Button fab onClick={ this.navigateTo.bind(this, 'girl') }>
                <TagFaces />
              </Button>
            </Grid>
          </Grid>

          <Typography type="display1" align="center">
            want to see?
          </Typography>
        </Grid>
      </Grid>
    );
  }

  private navigateTo(gender: string): void {
    this.props.router.replace(`/browse/${gender}`);
  }
}
