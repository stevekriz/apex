const request = require('supertest');
const app = require('../server/app.js');

describe('Test the /api/img_carousel/:id path', () => {
  const id = Math.floor(Math.random() * (100 - 1) + 1);
  it('it should respond to a proper GET request', (done) => {
    request(app)
      .get(`/api/similar_listings/${id}`)
      .expect(200, done);
  });

  it('it should respond to an improper GET request', (done) => {
    request(app)
      .get('/api/similar_listings/id')
      .expect(400, done);
  });
});
