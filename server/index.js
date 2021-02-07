const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id/bundle', express.static(path.join(__dirname, '../public/bundle.js')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.use('/api/similar_listings', routes);
app.use('/api/listings', routes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
