import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return (
      <SetupForm />
    )
  }
  if(loading){
    return <Loading />
  }
  //console.log(questions[0]);
  const {question,incorrect_answers,correct_answer}= questions[0];
  const answers = [...incorrect_answers,correct_answer];

  return(
    <main>
      <Modal />
      <section className='quiz'>
        <p className="correct-answers">
          correct answers: {correct}/{index}
        </p>
        <article className='container'>
          {/* IMPORTANT : this is the correct way to write this because of HTML 08:50 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23276052#overview  */}
       <h2 dangerouslySetInnerHTML={{__html: question}}/>
       <div className="btn-container">
        {answers.map((answer,index)=>{
          return (
            <button
              key={index}
              className='answer-btn'
              // onClick={() => checkAnswer(correct_answer === answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          )
        })}
       </div>
        </article>
      </section>
    </main>
  )

}

export default App
