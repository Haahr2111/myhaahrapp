import React from "react";

function Question(props) {
    const id = props._id;
    const q = props.getQuestion(id);
    return (
<>
<h3>{q.name}</h3>
      <p>{q.content}</p>
</>
    )
}

export default Question