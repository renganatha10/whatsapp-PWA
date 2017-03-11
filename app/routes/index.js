import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import App from './../components';
import NoMatch from './../components/noMatch';

export const routes = (
  <Route path="/" component={App} >
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default class AppRoute extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        routes={routes} />);
  }
}
