import * as React from 'react';
import './app.css';

import './database.ts';

import { TopBar } from './components/TopBar';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <TopBar />
        { this.props.children }
      </div>
    );
  }
}
