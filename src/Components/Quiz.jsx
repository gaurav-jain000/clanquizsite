import React, { useState } from 'react'
import FilterMenu from './FilterMenu'
import Loader1 from './Loader1';

const Quiz = ({ themeObj }) => {
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
    setOptions(null);
    setCounter(counter + 1);
  }
  return (
    <div className='row animation-appear-smooth'>
      <div className="col d-flex flex-column align-items-start">
        <button className={`btn btn-outline-${themeObj.btnColor}`} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Show/Hide Instructions</button>
        <div className={`collapse show`} id="collapseExample">
          <div className={`card card-body bg-${themeObj.backgroundColor}`}>
            <p className={`text-${themeObj.textColor} border border-secondary rounded-3 p-3`}>
              <span className="h3">How to play?</span> <br />
              The Rules are simple, the quiz will start after hitting Start button below, after that questions will be put one by one in front of you with relative options, and one of the options is correct, <strong className={`text-${themeObj.btnColor}`}>Read the question</strong> carefully and <strong className={`text-${themeObj.btnColor}`}>click on option</strong> that you think is correct answer. <br />
              <strong className={`text-${themeObj.btnColor}`}>Note</strong> that 1 Point will be assigned for correct answer and No points will be deducted for wrong answer.
            </p>
          </div>
        </div>
        <div className={`mt-3 text-${themeObj.textColor} border border-secondary rounded-3 p-3 w-100`}>
          <span className="h3">Additional</span> <br />
          You can <strong> choose Number of questions </strong>, even filter out questions on the basis of <strong>Category</strong>, <strong>Difficulty</strong> and <strong>Type</strong>. <br />
          <FilterMenu getQuestions={getQuestions} themeObj={themeObj} />
        </div>
      </div>
      <div className="col-12 d-flex align-items-start justify-content-center animation-appear-smooth">
        {
          questions
            ?
            counter === -1
              ?
              <div className='text-center animation-appear-smooth'>
                <div className={`display-4 text-${themeObj.textColor}`}>Let's get started, shall we?</div>
                <button className={`btn btn-outline-${themeObj.btnColor} rounded-pill mt-3 px-5`} onClick={() => setCounter(counter + 1)} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Start </button>
              </div>
              :
              <div className='quiz-item'>
                {
                  counter < questions.length
                    ?
                    <div>
                      <div className={`font-monospace text-${themeObj.textColor}`}>
                        Question no. : {counter + 1}/{questions.length} <br />
                        Category : <span className='text-warning'> {questions[counter].category}</span> <br />
                      </div>
                      <span className={`display-6 animation-appear-smooth text-${themeObj.textColor}`}>
                        {decodeHTML(questions[counter].question)}
                      </span>
                      {
                        questions[counter].type === "boolean"
                          ?
                          <div className='text-center mt-2 animation-appear-smooth'>
                            <button className={`btn btn-${themeObj.btnColor} text-light rounded-pill px-5`} value="True" onClick={(e) => checkAnswer(e.target.value)}>True</button>
                            <button className={`ms-2 btn btn-${themeObj.btnColor} text-light rounded-pill px-5`} value="False" onClick={(e) => checkAnswer(e.target.value)}>False</button>
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
                                        <label htmlFor={index} className={`half-label px-3 h-100 d-inline-block bg-grey text-${themeObj.btnColor} d-flex justify-content-center align-items-center`}>{String.fromCharCode(alpha + index)}</label>
                                        <button id={index} className={`half-button w-75 h-100 btn text-light text-start btn-${themeObj.btnColor} animation-appear-smooth`} onClick={(e) => checkAnswer(e.target.value)} value={elem}>
                                          {decodeHTML(elem)}
                                        </button>
                                      </li>
                                    )
                                  })
                                  :
                                  <Loader1 themeObj={themeObj} loaderColor={themeObj.btnColor} text={"Loading options"} onEnded={setOptions([...questions[counter].incorrect_answers, questions[counter].correct_answer].sort())} />
                              }
                            </ul>
                          </div>
                      }
                    </div>
                    :
                    <div className={`text-center text-${themeObj.textColor} display-4`}>
                      Your Score is <span className={`text-${themeObj.btnColor}`}>{score}/{questions.length}</span> <br />
                      <button className='btn btn-danger rounded-pill px-5 my-3 animation-appear-smooth' onClick={() => { document.getElementById("loadMoreBtn").click(); setTimeout(() => document.getElementById("filterColl").click(), 1000); setScore(0) }}>Load More</button>
                    </div>
                }
              </div>
            :
            <Loader1 themeObj={themeObj} loaderColor={themeObj.btnColor} text="Loading your Question" />
        }
      </div>
    </div>
  )
}

export default Quiz