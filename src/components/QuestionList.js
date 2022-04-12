import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    (async () => {
      let req = await fetch(`http://localhost:4000/questions`)
      let res = await req.json()
      console.log("data rtn", res)
      setQuestions(res)
    })()
  }, [])
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {
        questions.map((question) => {
          return (
            <QuestionItem key={question.id} question={question}/>
          )
        })
      }
      </ul>
    </section>
  );
}

export default QuestionList;
