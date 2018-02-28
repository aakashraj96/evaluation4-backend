const saveQuestionReponse = require('../controllers/saveQuestionResponseHandler');

module.exports = {
  path: '/saveQuestionReponse',
  method: 'POST',
  handler: (request, reply) => {
    console.log('HIT saveQuestionReponse');
    const replyPromise = saveQuestionReponse(
      request.payload.answer,
      request.payload.questionid, request.payload.username,
    );
    replyPromise.then((data) => {
      reply(data);
    });
  },
};
