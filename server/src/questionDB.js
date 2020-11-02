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
        score: Number }]
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

    async function createAnswer(id, answer, score) {
      let question = await getQuestion(id);
      let Newanswer = ({
        answer: answer,
        score: score
      });
      question.push(Newanswer);
      question.save();
      return question;
    }
  
    
  
    return {
      getQuestions,
      getQuestion,
      createQuestion,
     createAnswer
    }
  }
