import React from 'react';
import {Link} from "@reach/router";

import AddQuestion from "./AddQuestion.js";
function Questions(props){
    return(
        <>
        <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
        </>
    )
}

export default Questions;

