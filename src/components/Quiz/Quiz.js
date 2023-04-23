import './Quiz.css';
import { characters } from '../../data/quiz';
import { useState } from 'react';

function Quiz() {
  const [charList, setCharList] = useState(characters);
  const [currChar, setCurrChar] = useState(characters[0]);
  const [rightAnswersAmount, setRightAnswersAmount] = useState(0);
  const [wrongAnswersAmount, setWrongAnswersAmount] = useState(0);

  function handleAnswer() {
    const currCharIndex = charList.indexOf(currChar);
    console.log(currCharIndex);
    if (currCharIndex === 0 || currCharIndex) {
      setCurrChar(charList[currCharIndex + 1]);
    } else {
      console.log('no more char');
    }
  }

  function handleRightAnswer() {
    handleAnswer();
    setRightAnswersAmount(rightAnswersAmount + 1);
  }

  function handleWrongAnswer() {
    handleAnswer();
    setWrongAnswersAmount(wrongAnswersAmount + 1);
  }

  return (
    <div className="quiz">
      {currChar ? (
        <span className="quiz__current-character">{currChar.mandarin} </span>
      ) : (
        <>
          <h3>Good job!</h3>
          <p>
            Your result: {rightAnswersAmount}/{charList.length}
          </p>
        </>
      )}

      {currChar ? (
        <div className="quiz__answers-constainer">
          {charList.map((char) => {
            return (
              <button
                key={char.id}
                onClick={
                  char.translation === currChar.translation
                    ? handleRightAnswer
                    : handleWrongAnswer
                }
              >
                {char.translation}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;
