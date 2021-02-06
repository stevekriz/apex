import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const primaryListingId = window.location.pathname.match(/\/(\d+)\//)[1];

ReactDOM.render(
  <App primaryListingId={primaryListingId} />,
  document.getElementById('img_carousel'),
);
