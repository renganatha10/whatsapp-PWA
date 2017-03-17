import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, match, Router } from 'react-router';
import { routes } from './routes';
import './styles/index.scss';
import configureStore from './store/configureStore';


const store = configureStore();

match({
  history: hashHistory,
  routes
}, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('root')
  );
});
