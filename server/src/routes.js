

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

  return router;
}
