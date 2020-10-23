import React, {useEffect, useState} from 'react';
import AddQuestion from './AddQuestion';
import Questions from "./Questions";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []); 

  function addQuestion(name, content){
    console.log(name, content);
    
    const newQuestion = {
      name: name,
      content: content
    }   
  }
  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>
     <Questions addQuestion={addQuestion()}></Questions>
    </>
  );
}

export default App;
