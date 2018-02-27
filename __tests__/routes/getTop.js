const server = require('../../src/server');

jest.setTimeout(10000);


describe('Testing getTop route', () => {
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'GET',
      url: '/getTop',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
