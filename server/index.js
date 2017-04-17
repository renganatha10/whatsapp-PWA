import React from 'react';
import { routes } from './../app/routes';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import configureStore from './../app/store/configureStore';
import Express from 'express';
import fs from 'fs';
import expressStaticGzip from 'express-static-gzip';


const app = new (require('express'))();
const port = process.env.PORT || 5000;

app.use('/manifest.json', Express.static('./dist/manifest.json'));
app.use('/favicon.ico', Express.static('./app/images/favicon.ico'));
app.use('/sw.js', Express.static('./dist/sw.js'));
app.use('/static/fonts', Express.static('./server/public/fonts'));
app.use('/static', expressStaticGzip('./dist/static', {
  maxAge: 31536000,
  setHeaders(res) {
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
    return res;
  }
}));

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https')
    res.redirect('https://' + req.hostname + req.url);
  else
    next();
});

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (!renderProps) {
      const markup = '<div>Route Not Found</div>' ;
      res.render('index', { markup });
    }
    const store = configureStore();
    const preloadedState = store.getState();
    const markup = renderToString(
           <Provider store={store}>
             <RouterContext {...renderProps}/>
           </Provider>);

    fs.readFile('./dist/index.html', 'utf8', (err, file) => {
      if (err) {
        return console.log(err);
      }
      let document = file.replace(/<div id="root"><\/div>/, `<div id="root">${markup}</div>`);
      document = document.replace(/'preloadedState'/, `'${JSON.stringify(preloadedState)}'`);
      res.setHeader('Cache-Control', 'no-cache');
      res.send(document);
    });
  });
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
