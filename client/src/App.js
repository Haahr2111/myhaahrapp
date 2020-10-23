import React, {useEffect, useState} from 'react';
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

  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>
      <form>
        <label>Subject: </label>
        <input type="text"></input>
        <label>Your Question: </label>
        <input type="text"></input> 
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default App;
