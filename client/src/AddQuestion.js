import React, {useState, useEffect} from 'react';

function AddQuestion(props) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    
    return (
      <>
        <h3>Add Question</h3>
  
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Subject" />
        <input onChange={(event) => setContent(event.target.value)} type="text" placeholder="Question"/>
       
        <button type="button" onClick={(event) => props.addQuestion(name, content)}>
          Submit
        </button>
      </>
    );
  }
  
  export default AddQuestion;
  