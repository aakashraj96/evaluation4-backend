const server = require('../../src/server');

jest.setTimeout(10000);


describe('Testing calculateScore route', () => {
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'POST',
      url: '/calculateScore',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
