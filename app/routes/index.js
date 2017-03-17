import React from 'react';
import { Route } from 'react-router';
import App from './../components';
import NoMatch from './../components/noMatch';

export const routes = (
  <Route path="/" component={App} >
    <Route path="*" component={NoMatch}/>
  </Route>
);
