const getQuestionsHandler = require('../controllers/getQuestionsHandler');

module.exports = {
  path: '/getQuestions',
  method: 'GET',
  handler: (request, reply) => {
    const replyPromise = getQuestionsHandler();
    replyPromise.then((data) => {
      reply(data);
    });
  },
};
