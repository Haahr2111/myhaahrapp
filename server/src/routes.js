const { request } = require("express");

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

  router.post('/', async (req, res) => {
    // TODO: Implement!
    const question = request.body.question;
    res.json({msg: "You sent me "+ question});
  });

  return router;
}
