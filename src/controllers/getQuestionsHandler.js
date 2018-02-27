const fetch = require('node-fetch');


module.exports = () => {
  fetch('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions').then(data => data.json()).then((jsonData) => {
    jsonData.allQuestions.forEach((question) => {
      fetch(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${question.questionId}`).then(resp => resp.json()).then((jsonResp) => {
        console.log(jsonResp);
      });
    });
  });
};
