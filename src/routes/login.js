const loginHandler = require('../controllers/loginHandler');

module.exports = {
  path: '/login',
  method: 'POST',
  handler: (request, reply) => {
    const replyPromise = loginHandler(request.username);
    console.log('Promise is: ', replyPromise);
    replyPromise.then((data) => {
      console.log('Data is: ', data);
      reply(data);
    });
  },
};
