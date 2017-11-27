import * as React from 'react'
import { StartGame } from './game/start_game';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

@DragDropContext(HTML5Backend)
export class Main extends React.Component {
  render () {
    return <StartGame />;
  }
}
