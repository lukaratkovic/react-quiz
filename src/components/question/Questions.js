import React from "react";
import './Question.css';

const Question = (props) => {
    const step = props.step;
    const question = props.question.questions;
    return(
        <>
            <span>{step}/{Object.keys(question).length}</span>
            <h1>{question[step]}</h1>
        </>
    )
}

export default Question;