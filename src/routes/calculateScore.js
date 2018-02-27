const calculateScoreHandler = require('../controllers/calculateScoreHandler');

module.exports = {
  path: '/calculateScore',
  method: 'POST',
  handler: (request, reply) => {
    const replyPromise = calculateScoreHandler();
    reply('Sucess');
  },
};
