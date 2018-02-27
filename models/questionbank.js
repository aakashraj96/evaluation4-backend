'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionBank = sequelize.define('questionBank', {
    questionid: DataTypes.INTEGER,
    question: DataTypes.STRING,
    options: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {});
  questionBank.associate = function(models) {
    // associations can be defined here
  };
  return questionBank;
};