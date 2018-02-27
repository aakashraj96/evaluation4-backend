const login = require('./login');
const saveQuestionReponse = require('./saveQuestionResponse');
const getQuestions = require('./getQuestions');

module.exports = [].concat(login, saveQuestionReponse, getQuestions);
