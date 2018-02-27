const Models = require('../../models');

module.exports = () => {
  const promise = new Promise(((resolve) => {
    Models.users.findAll({
      order: [
        ['score', 'DESC'],
      ],
      limit: 5,
    }).then((data) => {
      console.log('dataaa: ', data);
      resolve(data);
    });
  }));
  return promise;
};
