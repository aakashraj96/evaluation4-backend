const Models = require('../../models');

module.exports = (uname) => {
  let lscore = 0;
  const promise = new Promise((resolve) => {
    let count = 0;
    Models.responses.findAll({
      where: {
        username: uname,
      },
    }).then((data) => {
      data.forEach((quesResp) => {
        // console.log('Question id is: ', quesResp.dataValues.questionid);
        Models.questionBank.findOne({
          where: {
            questionid: quesResp.dataValues.questionid,
          },
        }).then((ques) => {
          if (ques.dataValues.answer === quesResp.dataValues.answer) {
            lscore += 1;
          }
          count += 1;
          if (count === data.length) {
            Models.users.update(
              {
                score: lscore,
              },
              {
                where: {
                  username: uname,
                },
              },
            ).then(() => {
              resolve(lscore);
            });
          }
        });
      });
    });
  });
  return promise;
};
