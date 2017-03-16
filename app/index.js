import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoute from './routes';
import './styles/index.scss';
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <AppRoute />
  </Provider>,
  document.getElementById('root')
);
