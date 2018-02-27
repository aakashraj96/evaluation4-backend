const getTopHandler = require('../controllers/getTopHandler');

module.exports = {
  path: '/getTop',
  method: 'GET',
  handler: (request, reply) => {
    const replyPromise = getTopHandler();
    // replyPromise.then((data) => {
    //   reply(data);
    // });
    reply('success');
  },
};
