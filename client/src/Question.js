import React from "react";
import {Link, useParams} from "@reach/router";

function Question(props) {

    const id = props._id;
    const question = props.getQuestion(id);
    
   

    return (
<>
<h3>{question.name}</h3>
      <p>{question.content}</p>
      <Link to="/">Back</Link>
</>
    )
}

export default Question