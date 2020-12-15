import React from 'react';
import {Link} from "@reach/router";

import AddQuestion from "./AddQuestion.js";

function Questions(props){
  
const questionData = props.questionData;

    const mapFunction = element => {
        return(
    <Link to={`/question/${element._id}`} key={element._id}>
      <li>{element.name}</li>
    </Link>
    )
  
}
  const list = questionData.map(mapFunction);
  

  
    return(
        <>
        <h3>Questions</h3>
      <ul>
        {list}
      </ul>
        <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
        
        </>
    )
}

export default Questions;

