import React, { useEffect } from "react";

function Answer(props) {
  return (
    <div className="ans flex center column">
      <div className="emoji">👍🏻</div>
      <h2>Review Answers Here</h2>
      {props.answersArray.map((ans, i) => {
        return <p key={i}>{ans}</p>;
      })}
    </div>
  );
}

export default Answer;
