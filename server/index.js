/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3004;
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers/imageController.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/img_carousel/:id', controllers.getPictures);

app.listen(port, () => {
  console.log(`Photo Carousel App listening at http://localhost:${port}`);
});

module.exports = {
  app,
  port,
};
