import React from "react";
import './Answer.css';

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((key, i) => (
            <li 
            onClick={() => props.setAnswer(key)}
            key={key}>
                {props.answer[key]}
            </li>
        ))

    return(
        <ul className="Answers">
            {answers}
        </ul>
    );
}

export default Answer;