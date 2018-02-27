const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing getTop route', () => {
  beforeAll((done) => {
    Models.users.bulkCreate([
      {
        username: 'aakash',
        score: 5,
      },
      {
        username: 'abcd',
        score: 10,
      },
      {
        username: 'abcde',
        score: 7,
      },
      {
        username: 'qwerty',
        score: 5,
      },
      {
        username: 'random',
        score: 17,
      },
      {
        username: 'low',
        score: 1,
      },
    ]).then(() => {
      done();
    });
  });
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
  it('Checking if response size is 5', (done) => {
    const options = {
      method: 'GET',
      url: '/getTop',
    };
    server.inject(options, (response) => {
      // console.log(JSON.parse(response.payload));
      expect(JSON.parse(response.payload).length).toBe(5);
      done();
    });
  });
  it('Checking if highest score is on the top', (done) => {
    const options = {
      method: 'GET',
      url: '/getTop',
    };
    server.inject(options, (response) => {
      expect(JSON.parse(response.payload)[0].score).toBe(17);
      done();
    });
  });
});
