import React, {useState, useEffect} from "react";

function AddAnswer(props) {
    const [answer, setAnswer] = useState('')
    
	



	return (
		<>
		<h3>Add an answer</h3>
			<form>
				<label htmlFor="form_answer">Comment</label>
				<input onChange={event => setAnswer(event.target.value)} type="text" id="form_answer" name="form_answer"/>
				<button type="button" onClick={(event) => props.addAnswer(props.id, answer)}>
					Submit
				</button>
			</form>
		</>
	);
}

export default AddAnswer;