import * as React from 'react';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export interface IMatchDialogProps {
  open: boolean;
  onClick: (action: string) => void;
}

export class MatchDialog extends React.Component<IMatchDialogProps, { open: boolean }> {
  public render() {
    return (
      <Dialog
        open={ this.props.open }
        keepMounted
        onRequestClose={ this.handleRequestClose.bind(this, 'continue') }
      >
        <DialogTitle>
          We got new Match!!!
        </DialogTitle>

        <DialogActions>
          <Button onClick={ this.handleRequestClose.bind(this, 'goToMatches') } color="primary">
            Navigate to matches
          </Button>

          <Button onClick={ this.handleRequestClose.bind(this, 'continue') } color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  private handleRequestClose(action: string) {
    this.props.onClick(action);
  }
}
