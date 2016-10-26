import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import HomePage from './components/HomePage';

import './socket-init';

render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
