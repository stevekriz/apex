/* eslint-disable no-console */
const express = require('express');
const controllers = require('./controllers/imageController.js');
const app = express();
const port = 3000;
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/img_carousel/:id', controllers.getPictures);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
