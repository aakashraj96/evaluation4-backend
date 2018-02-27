const Models = require('../../models');

module.exports = (response, qid, uname) => {
  const promise = new Promise((resolve) => {
    Models.responses.upsert({
      username: uname,
      questionid: qid,
      answer: response,
    }).then(() => {
      resolve('Answer saved');
    });
  });
  return promise;
};
