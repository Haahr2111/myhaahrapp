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
     <AddAnswer addAnswer={props.addAnswer}></AddAnswer>
      <Link to="/">Back</Link>
</>
    )
}

export default Question