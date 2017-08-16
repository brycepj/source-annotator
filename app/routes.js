/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import RepoListManagerPage from './containers/RepoListManagerPage';
// import CounterPage from './containers/CounterPage';
// import RepoViewPage from './containers/RepoViewPage';

export default () => (
  <App>
    <Switch>
      {/* <Route path="/repo-view" component={RepoViewPage} />
      <Route path="/counter" component={CounterPage} /> */}
      <Route path="/" component={RepoListManagerPage} />
    </Switch>
  </App>
);
