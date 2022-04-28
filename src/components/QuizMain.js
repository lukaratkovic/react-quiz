import React, { useState } from 'react';
import Question from './question/Questions';
import Answer from './answer/Answer';
import Result from './result/Result';
import './QuizMain.css';

const Quiz = () => {

  const [questionsList, setQuestion] = useState(
    {
      "questions": {
        1: "What is your favorite animal?",
        2: "What is your favorite drink?"
      },
      "answers": {
        1: {
          1: 'Lion',
          2: 'Eagle',
          3: 'Badger',
          4: 'Snake'
        },
        2: {
          1: 'Coca Cola',
          2: 'Coffee',
          3: 'Juice',
          4: 'Alcohol'
        }
      }
    }
  );

  let [points, addPoint] = useState([0,0,0,0]);
  let [step, setStep] = useState(1);

  const setAnswer = answer => {
    let results = points;
    points[answer-1]++;
    addPoint(results);
    setStep(step + 1)
  }

  const restart = () => {
      addPoint([0,0,0,0]);
      setStep(1);
  }

  return (
    <div className='Content'>
        {   (step <= Object.keys(questionsList).length) ?
                // Render question and answers if final question has not been answered
                <>
                    <Question question={questionsList.questions[step]}/>
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