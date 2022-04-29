import React, { useState } from 'react';
import Question from './question/Questions';
import Answer from './answer/Answer';
import Result from './result/Result';
import './QuizMain.css';

const Quiz = () => {

  // Each questions has 2 or 4 answers
  // Each Hogwarts house is marked with a number:
  // 1 for Gryffindor, 2 for Ravenclaw, 3 for Hufflepuff, 4 for Slytherin
  // 2-answer questions count for two houses, as defined inside arrays
  const [questionsList, setQuestion] = useState(
    {
      "questions": {
        1: "Are you an early bird or night owl?",
        2: "Cats or dogs?",
        3: "What sounds most interesting to study?",
        4: "Choose an element",
        5: "Violence can be a solution",
        6: "Could you forgive and forget?",
        7: "What do you find most calming?",
        8: "Are you an optimist or pressimist?",
        9: "What magical item would you like to have?",
        10: "Which magical creature would you like to have?"
      },
      "answers": {
        1: {
          1: ["Early bird", [2, 3]],
          2: ["Night owl", [1,4]]
        },
        2: {
          1: ["Cats", [2,4]],
          2: ["Dogs", [1,3]]
        },
        3: {
          1: ['Math', 2],
          2: ['Politics', 4],
          3: ['Biology', 3],
          4: ['History', 1]
        },
        4: {
          1: ['Water', 2],
          2: ['Fire', 4],
          3: ['Earth', 3],
          4: ['Air', 4]
        },
        5: {
          1: ['Yes', [1,4]],
          2: ['No', [2,3]]
        },
        6: {
          1: ['Yes', [1,3]],
          2: ['No', [2,4]]
        },
        7: {
          1: ['Exercise', 1],
          2: ['Nature', 3],
          3: ['Music', 2],
          4: ['Talking to a close friend', 4]
        },
        8: {
          1: ['Optimist', [1,3]],
          2: ['Pessimist', [2,4]]
        },
        9: {
          1: ['Wand', 2],
          2: ['Invisibility cloak', 4],
          3: ['Broom', 1],
          4: ['Resurrection stone', 3]
        },
        10: {
          1: ['Phoenix', 1],
          2: ['Unicorn', 3],
          3: ['Hipogriff', 4],
          4: ['Sphynx', 2]
        }
      }
    }
  );

  let [points, addPoint] = useState([0,0,0,0]);
  let [step, setStep] = useState(1);

  const setAnswer = answer => {
    let results = points;

    if(Array.isArray(answer)){
      answer.forEach(a => points[a-1]++);
    }
    else points[answer-1]++;

    addPoint(results);
    setStep(step + 1);
  }

  const restart = () => {
      addPoint([0,0,0,0]);
      setStep(1);
  }

  return (
    <div className='Content'>
        {   (step <= Object.keys(questionsList.questions).length) ?
                // Render question and answers if final question has not been answered
                <>
                    <Question question={questionsList} step={step}/>
                    <Answer answer={questionsList.answers[step]} setAnswer={setAnswer}/>
                </>
                :
                // Render result
                <Result points={points} restart={restart}/>
            
        }
    </div>
  )
}

export default Quiz