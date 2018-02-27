const login = require('./login');
const saveQuestionReponse = require('./saveQuestionResponse');
const getQuestions = require('./getQuestions');
const calculateScore = require('./calculateScore');

module.exports = [].concat(login, saveQuestionReponse, getQuestions, calculateScore);
