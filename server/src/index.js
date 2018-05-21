import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import PORT from './config';
import createStore from './helpers/createStore';

const app = express();

// Set up a proxy server
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  // Find the components will be shown base on the request URL and load needed data.
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // Render the app after all the promises are resolved
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    //Redirect user if not login
    if (context.url) {
      return res.redirect(303, context.url);
    }

    // 404 error page
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(PORT, function listenHandler() {
  console.info(`Running on ${PORT}...`);
});
