import React from "react";
import './Answer.css';

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((key, i) => (
            <li 
            onClick={() => props.setAnswer(props.answer[key][1])}
            key={key}>
                {props.answer[key][0]}
            </li>
        ))

    return(
        <ul className="Answers">
            {answers}
        </ul>
    );
}

export default Answer;