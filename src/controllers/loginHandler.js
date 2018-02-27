const Models = require('../../models');

module.exports = (uname) => {
  const promise = new Promise((resolve) => {
    Models.users.find({
      where: {
        username: uname,
      },
    }).then((data) => {
      if (data === null) {
        Models.users.create({
          username: uname,
          score: 0,
        }).then(() => { resolve('Created new user'); });
      } else {
        Models.responses.findAll({
          where: {
            username: uname,
          },
        }).then((quizResponse) => {
          resolve(quizResponse);
        });
      }
    });
  });
  return promise;
};
