const loginHandler = require('../controllers/loginHandler');

module.exports = {
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    const replyPromise = loginHandler(request.payload.username);
    replyPromise.then((data) => {
      reply(JSON.stringify(data));
    });
  },
};
