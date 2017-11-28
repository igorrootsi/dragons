import * as React from 'react';

import { Link, withRouter } from 'found';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import red from 'material-ui/colors/red';
import IconButton from 'material-ui/IconButton';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';

import { matches } from '../database';

import { Block, Face, TagFaces } from 'material-ui-icons';

import { IPerson } from '../interfaces/IPerson';
import { MatchDialog } from './MatchDialog';

function CardAvatar({ gender }) {
  return (
    <Avatar aria-label="Recipe">
      { gender === 'girl' ? <Face /> : <TagFaces /> }
    </Avatar>
  );
}

const styles = {
  card: {
    maxWidth: 345,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  media: {
    backgroundSize: 300,
    height: 300,
  },
};

export interface IPersonCardProps extends WithStyles<keyof typeof styles> {
  data: {
    person: IPerson;
  };
  gender: string;
  router?: any;
}

export interface IPersonCardState {
  isMatchDialogOpen: boolean;
}

// @ts-ignore:
@withStyles(styles)
export class PersonCard extends React.Component<IPersonCardProps, IPersonCardState> {
  public state = { isMatchDialogOpen: false };

  public render() {
    const { data: { person }, gender, classes, router } = this.props;

    return (
      <div>
        <Card>
          <CardHeader
            avatar={ <CardAvatar gender={ gender } /> }
            title={ person.name }
          />
          <CardMedia
            className={ classes.media }
            image={ person.image }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              { person.description }
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Dislike" onClick={ this.dislike.bind(this) }>
              <Block />
            </IconButton>

            <div className={ classes.flexGrow } />

            <IconButton aria-label="Like" onClick={ this.like.bind(this) }>
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>

        <MatchDialog
          open={ this.state.isMatchDialogOpen }
          onClick={ this.onDialogClick.bind(this) }
        />
      </div>
    );
  }

  private dislike() {
    this.props.router.push(`/browse/${this.props.gender}`);
  }

  private onDialogClick(action: string): void {
    this.setState({ isMatchDialogOpen: false });

    if (action === 'goToMatches') {
      this.props.router.push(`/matches`);
    } else {
      this.props.router.push(`/browse/${this.props.gender}`);
    }
  }

  private like() {
    const { data: { person } } = this.props;

    if (person.likesYou) {
      this.setState({ isMatchDialogOpen: true });
      matches.push(person);

    } else {
      this.props.router.push(`/browse/${this.props.gender}`);
    }
  }
}
