const express = require('express');
const config = require('./config');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
