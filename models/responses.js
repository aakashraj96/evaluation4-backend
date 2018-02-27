'use strict';
module.exports = (sequelize, DataTypes) => {
  var responses = sequelize.define('responses', {
    username: DataTypes.STRING,
    questionid: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {});
  responses.associate = function(models) {
    // associations can be defined here
  };
  return responses;
};