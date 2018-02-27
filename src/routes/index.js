const login = require('./login');
const saveQuestionReponse = require('./saveQuestionResponse');
const getQuestions = require('./getQuestions');
const calculateScore = require('./calculateScore');
const getTop = require('./getTop');

module.exports = [].concat(login, saveQuestionReponse, getQuestions, calculateScore, getTop);
