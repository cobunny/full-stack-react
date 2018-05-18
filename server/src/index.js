import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import PORT from './config';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, function listenHandler() {
  console.info(`Running on ${PORT}...`);
});
