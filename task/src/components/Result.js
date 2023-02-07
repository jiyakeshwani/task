import React from "react";

function Result() {
  return (
    <div className="flex center column result">
      <div className="check">✅</div>
      <h2>You have successfully submitted the assessment</h2>
      <p>Questions Asked : 5</p>
      <p>Questions Correct : 4</p>
      <p>Your score : 8</p>
    </div>
  );
}

export default Result;
