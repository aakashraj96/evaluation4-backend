const Models = require('../../models');

module.exports = (uname) => {
  const promise = new Promise((resolve, reject) => {
    Models.users.find({
      where: {
        username: uname,
      },
    }).then((data) => {
      if (!data) {
        Models.users.create({
          username: uname,
          score: 0,
        }).then(() => { resolve('Created new user'); });
      } else {
        resolve('user exists');
      }
    });
  });
  return promise;
};
