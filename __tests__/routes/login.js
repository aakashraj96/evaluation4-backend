const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing login route', () => {
  beforeEach((done) => {
    Models.users.destroy({ truncate: true }).then(() => {
      Models.responses.destroy({ truncate: true }).then(() => {
        Models.users.create({
          username: 'aakash',
          score: 0,
        }).then(() => {
          Models.responses.create({
            username: 'aakash',
            questionid: 10,
            answer: 'bangladesh',
          }).then(() => { done(); });
        });
      });
    });
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

  it('Login with existing user', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'aakash',
      },
    };
    server.inject(options, (response) => {
      console.log('Response is: ', response.payload);
      expect(response.payload.toString()).toContain('questionid');
      done();
    });
  });

  it('Login with existing user, Expected output to have score', (done) => {
    const options = {
      method: 'POST',
      url: '/login',
      payload: {
        username: 'aakash',
      },
    };
    server.inject(options, (response) => {
      // console.log('Response is: ', response.payload);
      expect(response.payload.toString()).toContain('score');
      done();
    });
  });
});
