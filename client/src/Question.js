import React from "react";
import {Link, useParams} from "@reach/router";
import AddAnswer from "./AddAnswer";

function Question(props) {

    const params = useParams()
    const id = params.id;
    const question = props.getQuestion(id);

    if (question===undefined) return null 

    const answerList= question.answers.map(e=> {return (
        <>
        <li key={e._id}><p>{e.answer}</p>
        <button onClick={()=> props.answerScore(id, e._id)}>Vote up</button> <p>Score: {e.score}</p>
        </li>
        </>
        )
    })

   console.log(question)

    return (
<>
<h3>{question.name}</h3>
      <p>{question.content}</p>
    <p><b>Answers</b></p>
    <ul>{answerList}</ul>
     <AddAnswer id={id} addAnswer={props.addAnswer}></AddAnswer>
      <Link to="/">Back</Link>
</>
    )
}

export default Question