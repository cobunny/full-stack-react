import express from 'express';
import renderer from './helpers/renderer';
import PORT from './config';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(PORT, function listenHandler() {
  console.info(`Running on ${PORT}...`);
});
