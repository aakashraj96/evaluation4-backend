const server = require('../../src/server');

jest.setTimeout(10000);


describe('Testing login route', () => {
  it('Passing correct login credentials, Expected output: a JWT token', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'abcd1234',
      },
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
