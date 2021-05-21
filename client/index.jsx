import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const primaryListingId = window.location.pathname.match(/\/(\d+)\//)[1];

ReactDOM.render(
  <App primaryListingId={primaryListingId} />,
  document.getElementById('carousel')
);
