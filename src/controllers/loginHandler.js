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
        }).then(() => {
          resolve({
            score: 0,
            prevResponse: [],
          });
        });
      } else {
        Models.responses.findAll({
          where: {
            username: uname,
          },
        }).then((quizResponse) => {
          resolve({
            score: data.dataValues.score,
            prevResponse: quizResponse,
          });
        });
      }
    });
  });
  return promise;
};
