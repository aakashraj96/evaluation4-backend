const server = require('../../src/server');
const Models = require('../../models');

jest.setTimeout(10000);


describe('Testing calculateScore route', () => {
  beforeAll((done) => {
    Models.responses.bulkCreate([{
      username: 'aakash',
      questionid: 90,
      answer: 'abcd',
    },
    {
      username: 'aakash',
      questionid: 12,
      answer: 'New Delhi',
    }]).then(() => {
      Models.questionBank.bulkCreate([{
        questionid: 12,
        question: 'What is your name',
        answer: 'New Delhi',
      },
      {
        questionid: 90,
        question: 'What is your age',
        answer: 'dcba',
      }]).then(() => {
        done();
      });
    });
  });
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'POST',
      url: '/calculateScore',
      payload: {
        username: 'aakash',
      },
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  it('Checking if the route responds', (done) => {
    const options = {
      method: 'POST',
      url: '/calculateScore',
      payload: {
        username: 'aakash',
      },
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('1');
      done();
    });
  });
});
