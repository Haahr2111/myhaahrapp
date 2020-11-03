module.exports = (mongoose) => {

  /*const answersSchema = new.mongoose.Schema({
  name: String,
 content: String,
 score: Number 
 
   }); */

  const questionSchema = new mongoose.Schema({
    name: String,
    content: String,
    answers: [{
      answer: String,
      score: Number
    }]
  });

  const questionModel = mongoose.model('question', questionSchema);

  async function getQuestions() {
    try {
      return await questionModel.find();
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function getQuestion(id) {
    try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function createQuestion(name, content) {
    let question = new questionModel({
      name: name,
      content: content
    });
    return question.save();
  }

  async function createAnswer(answer, id) {

    let NewAnswer = {
      answer: answer,
      score: 0
    };
    return await questionModel.findOneAndUpdate(
      { _id: id },
      { $push: { answers: NewAnswer } }
    );

  }

  async function answerScore(questionId, answerId) {
    console.log('questionId: ' + questionId + 'answerId: ' + answerId);
    return await questionModel.update(
      { _id: questionId, 'answers._id': answerId },
      { $inc: { 'answers.$.score': 1 } },
      { new: true }
    );
  }

  return {
    getQuestions,
    getQuestion,
    createQuestion,
    createAnswer,
    answerScore
  }
}
