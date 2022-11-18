import React, { useState } from 'react'
import FilterMenu from './FilterMenu'
import Loader1 from './Loader1';

const Quiz = () => {
  const [questions, setQuestions] = useState(null);
  const [counter, setCounter] = useState(-1);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState();
  var alpha = 65;
  const getQuestions = (arr) => {
    setCounter(-1)
    setQuestions(arr)
  }

  // This function is decoding html entity by using a textarea
  var decodeHTML = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  const checkAnswer = (clickedValue) => {
    if (questions[counter].correct_answer === clickedValue) {
      setScore(score + 1);
    }
    proceed();
  }
  const proceed = () => {
    setCounter(counter + 1);
    setOptions();
  }
  return (
    <div className='row h-75 animation-appear-smooth'>
      <div className="col d-flex flex-column align-items-start">
        <FilterMenu getQuestions={getQuestions} />
      </div>
      <div className="col-12 d-flex justify-content-center animation-appear-smooth">
        {
          questions
            ?
            counter === -1
              ?
              <div className='text-center animation-appear-smooth'>
                <div className='display-4'>Let's get started, shall we?</div>
                <button className='btn btn-outline-primary rounded-pill mt-3 px-5' onClick={proceed}> Start </button>
              </div>
              :
              <div className='quiz-item'>
                {
                  counter < questions.length
                    ?
                    <div>
                      <div className='font-monospace text-primary'>
                        Question no. : {counter + 1}/{questions.length} <br />
                        Category : <span className='text-warning'> {questions[counter].category}</span> <br />
                      </div>
                      <span className='display-6 animation-appear-smooth'>
                        {decodeHTML(questions[counter].question)}
                      </span>
                      {
                        questions[counter].type === "boolean"
                          ?
                          <div className='text-center mt-2 animation-appear-smooth'>
                            <button className="btn btn-primary text-light rounded-pill px-5 animation-appear-smooth" value="True" onClick={(e) => checkAnswer(e.target.value)}>True</button>
                            <button className="ms-2 btn btn-primary text-light rounded-pill px-5 animation-appear-smooth" value="False" onClick={(e) => checkAnswer(e.target.value)}>False</button>
                          </div>
                          :
                          <div className='mt-2'>
                            <ul className='row row-cols-1 row-cols-md-2 list-unstyled'>
                              {
                                options
                                  ?
                                  options.map((elem, index) => {
                                    return (
                                      <li className="col d-flex align-items-center py-2" key={index}>
                                        <label htmlFor={index} className='half-label w-25 h-100 d-inline-block bg-grey text-primary d-flex justify-content-center align-items-center'>{String.fromCharCode(alpha + index)}</label>
                                        <button id={index} className=" half-button w-75 btn text-light text-start btn-primary animation-appear-smooth" onClick={(e) => checkAnswer(e.target.value)} value={elem}>
                                          {decodeHTML(elem)}
                                        </button>
                                      </li>
                                    )
                                  })
                                  :
                                  <Loader1 text="Loading your options" onEnded={setTimeout(()=> {setOptions([...questions[counter].incorrect_answers, questions[counter].correct_answer].sort())},1)} />
                              }
                            </ul>
                          </div>
                      }
                    </div>
                    :
                    <div className="text-center display-4">
                      Your Score is <span className="text-primary">{score}/{questions.length}</span> <br />
                      <button className='btn btn-danger rounded-pill px-5 my-3' onClick={() => { document.getElementById("loadMoreBtn").click(); setTimeout(()=> document.getElementById("filterColl").click(), 1000); setScore(0)}}>Load More</button>
                    </div>
                }
              </div>
            :
            <Loader1 text="Loading your Question" loaderColor="primary" />
        }
      </div>
    </div>
  )
}

export default Quiz