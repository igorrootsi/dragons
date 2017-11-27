import * as React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export class TopBar extends React.Component {
  render () {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
