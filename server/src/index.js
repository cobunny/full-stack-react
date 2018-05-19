import express from 'express';
import renderer from './helpers/renderer';
import PORT from './config';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(PORT, function listenHandler() {
  console.info(`Running on ${PORT}...`);
});
