import * as React from 'react';
import './app.css';

import { TopBar } from './components/TopBar';
import { Main } from './components/Main';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <TopBar />
        <Main />
      </div>
    );
  }
}

export default App;
