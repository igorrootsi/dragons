import * as React from 'react';

import { Link } from 'found';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export class TopBar extends React.Component {
  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Dragons
          </Typography>

          <Link to="/">
            <Button color="contrast">Home</Button>
          </Link>

          <Link to="/matches">
            <Button color="contrast">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
