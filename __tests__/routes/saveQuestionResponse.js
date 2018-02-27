const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing saveQuestionReponse route', () => {
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'POST',
      url: '/saveQuestionReponse',
      payload: {
        username: 'abcd1234',
        questionid: 10,
        answer: 'bangladesh',
      },
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
