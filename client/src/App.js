import React, {useEffect, useState} from 'react';
import AddQuestion from './AddQuestion.js';
import Questions from "./Questions";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

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
  
  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>
     <Questions addQuestion={addQuestion}></Questions>
    </>
  );
}

export default App;
