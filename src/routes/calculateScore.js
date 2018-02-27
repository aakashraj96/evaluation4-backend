const calculateScoreHandler = require('../controllers/calculateScoreHandler');

module.exports = {
  path: '/calculateScore',
  method: 'POST',
  handler: (request, reply) => {
    const replyPromise = calculateScoreHandler(request.payload.username);
    replyPromise.then((data) => {
      reply(data);
    });
  },
};
