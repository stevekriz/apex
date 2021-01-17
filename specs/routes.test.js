const request = require('supertest');
const express = require('express');
const port = 3000;


describe('/api/img_carousel/:id', function() {
  const id = Math.floor(Math.random() * (100 - 1) + 1);

  it('makes a successful API call', function(done) {
    request(`localhost:${port}`)
      .get(`/api/img_carousel/${id}`)
      .expect(200, done);
  });

  it('brings back some appriopriate data ', function(done) {
    request(`localhost:${port}`)
      .get(`/api/img_carousel/${id}`)
      .expect((res) => {
        res.body[0].id = id;
      })
      .expect(200, done);
  });
});