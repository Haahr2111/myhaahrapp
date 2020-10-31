import React, {useEffect, useState} from 'react';
import AddQuestion from './AddQuestion.js';
import Questions from "./Questions";
import Question from "./Question";
import {Router} from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  function getQuestion(id) {
    const question = data.find(element => element._id === id);
    return question;
  }
  async function addQuestion(name, content){
    console.log(name, content);
    
    //create object
    const newQuestion = {
      name: name,
      content: content
    }  
    //define post url 
    const url = `${API_URL}/questions`;
    //use fetch
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    });
    const data = await response.json();
    console.log(data);
  
  }
  
 //<Question path="/question/:id" getQuestion={getQuestion}></Question>
  return (
    <>
    <Router>
     
     <Questions path="/" questionData={data} addQuestion={addQuestion}></Questions>
     <Question path="/question/:id" getQuestion={getQuestion}></Question>
     </Router>
    </>
  );
}

export default App;
