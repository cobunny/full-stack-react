import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import PORT from './config';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // Find the components will be shown base on the request URL and load needed data.
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // Render the app after all the promises are resolved
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, function listenHandler() {
  console.info(`Running on ${PORT}...`);
});
