const fetch = require('node-fetch');
const Models = require('../../models');

module.exports = () => {
  const promise = new Promise((resolve) => {
    Models.questionBank.findAll().then((questionsData) => {
      if (questionsData.length === 0) {
        const promiseArray = [];
        // console.log('inside questionbank!!', questionsData);
        fetch('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions').then(data => data.json()).then((jsonData) => {
          jsonData.allQuestions.forEach((question, i) => {
            promiseArray[i] = new Promise((resolve, reject) => {
              fetch(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${question.questionId}`).then(resp => resp.json()).then((jsonResp) => {
                const optionsObject = {};
                Object.keys(question).forEach((key) => {
                  if (key.indexOf('option') >= 0) {
                    optionsObject[key] = question[key];
                  }
                });
                Models.questionBank.create({
                  questionid: question.questionId,
                  question: question.question,
                  options: JSON.stringify(optionsObject),
                  answer: jsonResp.answer,
                }).then((createdRow) => {
                  resolve(createdRow);
                });
              });
            });
          });
          Promise.all(promiseArray).then((arrayData) => {
            resolve(arrayData);
          });
        });
      } else {
        resolve(questionsData);
      }
    });
  });
  return promise;
};
