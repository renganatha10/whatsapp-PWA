/*eslint no-unused-vars: 0*/
import React from 'react';
import manifest from './manifest.json';
import trophy from './images/trophy.png';
import trophy2 from './images/trophy2.png';
import trophy3 from './images/trophy3.png';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, match, Router } from 'react-router';
import { routes } from './routes';
import './styles/index.scss';
import configureStore from './store/configureStore';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import registerEvents from 'serviceworker-webpack-plugin/lib/browser/registerEvents';


if ('serviceWorker' in navigator) {
  const registration = runtime.register();
  registerEvents(registration, {
    onInstalled: () => {
      console.log('onInstalled');
    },
    onUpdateReady: () => {
      console.log('onUpdateReady');
    },
    onUpdating: () => {
      console.log('onUpdating');
    },
    onUpdateFailed: () => {
      console.log('onUpdateFailed');
    },
    onUpdated: () => {
      console.log('onUpdated');
    },
  });
} else {
  console.log('NO Servie Worker');
}


const store = configureStore();

match({
  history: browserHistory,
  routes
}, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('root')
  );
});
