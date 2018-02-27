const saveQuestionResponseHandler = require('../../src/controllers/saveQuestionResponseHandler');
const Models = require('../../models');


jest.setTimeout(10000);


describe('Testing saveQuestionReponse Handler', () => {
  it('Checking if the response is saved in the database', (done) => {
    const promise = saveQuestionResponseHandler('bangladesh', 10, 'abcd1234');
    promise.then(() => {
      Models.responses.findOne({
        username: 'abcd1234',
        questionid: 10,
      }).then((data) => {
        expect(data.dataValues.answer).toBe('bangladesh');
        done();
      });
    });
  });
});
