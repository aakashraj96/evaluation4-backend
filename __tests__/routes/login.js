const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing login route', () => {
  beforeAll((done) => {
    Models.users.destroy({ truncate: true }).then(() => done());
  });
  it('Checking if the route responds', (done) => {
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

  it('Checking for new user: Expected output - user created', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'abcd1234',
      },
    };
    server.inject(options, (response) => {
      console.log('Response is: ', response.payload);
      expect(response.payload).toBe('Created new user');
      done();
    });
  });
});
