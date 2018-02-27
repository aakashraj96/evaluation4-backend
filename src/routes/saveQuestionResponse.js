const saveQuestionReponse = require('../controllers/saveQuestionResponseHandler');

module.exports = {
  path: '/saveQuestionReponse',
  method: 'POST',
  handler: (request, reply) => {
    const replyPromise = saveQuestionReponse(
      request.payload.answer,
      request.payload.questionid, request.payload.username,
    );
    replyPromise.then((data) => {
      reply(data);
    });
  },
};
