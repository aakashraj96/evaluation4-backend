const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing getQuestions route', () => {
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'GET',
      url: '/getQuestions',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
