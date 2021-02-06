const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');

const controllers = require('./controllers/similarListingsController.js');

const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id/bundle', express.static(path.join(__dirname, '../public/bundle.js')));
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.get('/api/primaryListingId/:id', controllers.get);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = {
  app,
  port,
};
