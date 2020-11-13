

module.exports = (DB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/questions', async (req, res) => {
    const questions = await DB.getQuestions(); 
    res.json(questions);
  });

  router.get('/questions/:id', async (req, res) => {
    const question = await DB.getQuestion(req.params.id);
    res.json(question);
  });

  router.post('/questions', async (req, res) => {
    // TODO: Implement!
    const name = req.body.name;
    const content = req.body.content;
    DB.createQuestion(name, content)
    res.json({msg: name + ' has been added'});
  });

  router.post('/answers', async (req, res) => {
    // TODO: Implement!
    const answer = req.body.answer;
    const id = req.body.id;
    await DB.createAnswer(answer, id)
    res.json({msg: answer + ' has been added'});
  });
  router.post('/answers/answerScore', async (req, res) => {
    // TODO: Implement!
    const questionID = req.body.questionID;
    const answerID = req.body.answerID;
    await DB.answerScore(questionID, answerID)
    res.json({msg: answer + ' has been added'});
  });
 
  return router;
}
