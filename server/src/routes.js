

module.exports = (DB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const questions = await questionDB.getQuestions(); 
    res.json(questions);
  });

  router.get('/:id', async (req, res) => {
    const question = await questionDB.getQuestion(req.params.id);
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
