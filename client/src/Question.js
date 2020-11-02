import React from "react";
import {Link, useParams} from "@reach/router";
import AddAnswer from "./AddAnswer";

function Question(props) {

    const id = props.id;
    const question = props.getQuestion(id);
    
   

    return (
<>
<h3>{question.name}</h3>
      <p>{question.content}</p>
    <p><b>Answers</b></p>
    <p>{question.answers}</p>
     <AddAnswer addAnswer={props.addAnswer}></AddAnswer>
      <Link to="/">Back</Link>
</>
    )
}

export default Question