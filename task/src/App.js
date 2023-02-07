import React, { useEffect, useState } from "react";
import Answer from "./components/Answer";
import Quiz from "./components/Quiz";

function App() {
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    const apiUrl = "https://opentdb.com/api.php?amount=5&type=multiple";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setQuestions(json.results);
        console.log(questions);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  } , []);

  return (
    <>
      <h1>Quiz Time?</h1>
      <div className=" container ">
  
        <Quiz data={questions} />
      </div>
    </>
  );
}

export default App;