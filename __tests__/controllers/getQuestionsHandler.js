const getQuestionsHandler = require('../../src/controllers/getQuestionsHandler');


jest.setTimeout(10000);


describe('Testing getQuestions Handler', () => {
  it('Checking if the response has answer in it', (done) => {
    const promise = getQuestionsHandler();
    promise.then((data) => {
      // console.log('gertQuestionHandler data is: ', data[0].dataValues);
      expect(Object.keys(data[0].dataValues).toString()).toContain('answer');
      done();
    });
  });
});
