import React, { useState } from "react";
import Answer from "./Answer";
import Result from "./Result";

function Quiz(props) {
  console.log(props.data);
  let [index, setIndex] = useState(0);
  let [answersArray, setAnswersArray] = useState([]);
  let [selectedAnsText, setSelectedAnsText] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [score , setScore] = useState(0)

  let currentQ = props.data[index];

  let correctAnsArray = props.data.map((ques)=> {
    return ques.correct_answer
  })
  

  let answers = currentQ
    ? currentQ.incorrect_answers.concat(currentQ.correct_answer)
    : "";

  function handleNext() {
    setIndex(index + 1);
  }

  function handlePrevious() {
    setIndex(index - 1);
  }

  function handleChange(id, e) {
    setSelectedAnsText(id);
    setAnswersArray(answersArray.concat(selectedAnsText));

    console.log(selectedAnsText);
  }
  function handleSubmit() {
    
    setSubmitted(true);
    for(let i=0; i<correctAnsArray.length; i++){
        console.log(correctAnsArray[i])
   
        if(correctAnsArray[i] === answersArray[i]){
            console.log(true)
            setScore(score+1)
        }else{
            setScore(score)
        }
    }
  }

  return (
    <>
      {submitted ? (
        <Result />
      ) : (
        <div className="flex row">
          <div className="quiz">
            <div className="flex space-btw">
              <button
                onClick={handlePrevious}
                className={index === 0 ? "hidden" : "button"}
              >
                ⬅️
              </button>
              <h2>Attempt Questions Here</h2>
              <button
                onClick={handleNext}
                className={index === 4 ? "hidden" : "button"}
              >
                ➡️
              </button>
            </div>
            {currentQ ? (
              <div className="ques">
                <h3>
                  Ques: {index + 1} {currentQ.question}
                </h3>
                <ul className="answers">
                  {answers.map((ans, i) => {
                    return (
                      <li className="flex" key={i}>
                        <input
                          type="radio"
                          onChange={() => handleChange(ans)}
                          value={ans}
                          name="ans"
                        />
                        <p>{ans}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            {index === 4 ? (
              <button onClick={handleSubmit} className="submit">
                Submit
              </button>
            ) : (
              ""
            )}
          </div>
          <Answer answersArray={answersArray} />
        </div>
      )}
    </>
  );
}

export default Quiz;
