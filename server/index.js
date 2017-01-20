import React from 'react';
import { routes } from './../app/routes';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import configureStore from './../app/store/configureStore';
import Express from 'express';
const  path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./../webpack.config');

const app = new (require('express'))();
const port = process.env.PORT || 5000;

const compiler = webpack(config);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));
app.use(Express.static(path.join(__dirname, 'static')));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (!renderProps) {
      const markup = '<div>Route Not Found</div>' ;
      res.render('index', { markup });
    }
    const store = configureStore();
    const markup = renderToString(
           <Provider store={store}>
             <RouterContext {...renderProps}/>
           </Provider>);
    res.render('index', { markup });
  });
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
