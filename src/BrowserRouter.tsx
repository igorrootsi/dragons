import * as React from 'react';

import { createBrowserRouter, HttpError, makeRouteConfig, Redirect, Route } from 'found';

import { App } from './app';
import { BrowseScreen } from './components/BrowseScreen';
import { SelectGenderScreen } from './components/SelectGenderScreen';
import { MatchesScreen } from './components/MatchesScreen';

function fetchPerson({ params: { gender } }) {
  return fetch('http://www.dragonsofmugloar.com/dating/api/profile/random?gender=' + gender)
    .then((data) => data.json())
    .then((person) => ({ person }));
}

export const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route Component={ App } >
      <Route path="/gender" Component={ SelectGenderScreen } />
      <Route path="/browse/:gender" Component={ BrowseScreen } getData={ fetchPerson } />
      <Route path="/matches" Component={ MatchesScreen } />

      <Redirect from="/" to="/gender" />
    </Route>,
  ),

  renderError: ({ error }) => (
    <div>
      { error.status === 404 ? 'Not found' : 'Error' }
    </div>
  ),
});

export default BrowserRouter;
