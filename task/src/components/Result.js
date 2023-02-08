import React from "react";

function Result(props) {
    console.log(props)
  return (
    <div className="flex center column result">
      <div className="check">✅</div>
      <h2>You have successfully submitted the assessment</h2>
      <p>Questions Asked : 5</p>
      <p>Questions Correct : {props.correctQ}</p>
      <p>Your score : {props.score}</p>
    </div>
  );
}

export default Result;
