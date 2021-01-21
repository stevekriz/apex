/* eslint-disable no-console */
const express = require('express');
const controllers = require('./controllers/imageController.js');
const app = express();
const port = 3000;
const path = require('path');

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/img_carousel/:id', controllers.getPictures);

app.listen(port, () => {
  console.log(`Photo Carousel App listening at http://localhost:${port}`);
});

module.exports = {
  app,
  port,
}