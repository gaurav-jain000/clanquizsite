import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FilterMenu from './FilterMenu'
import Loader1 from './Loader1';
import News from './News';

const QuestionAndAnswers = () => {
  const [questions, setQuestions] = useState(null);
  const getQuestions = (arr) => { setQuestions(arr) }
  // This function is decoding html entity by using a textarea
  var decodeHTML = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  return (
    <div className="row d-flex flex-column-reverse align-items-start flex-md-row animation-appear-smooth">
      <div className='col-12 col-md-3'>
        <News />
      </div>
      <div className="col-12 col-md-9">
        <div className="container">
        <FilterMenu getQuestions={getQuestions} horizontalCollapse="0"  />
        {
          questions
            ?
            <div className="accordion border accordion-flush mt-2 animation-appear-smooth" id="accordionFlush">
              {
                questions.map((elem, index) => {
                  return (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`flush-heading${index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                          {index + 1}. {decodeHTML(elem.question)}
                        </button>
                      </h2>
                      <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlush">
                        <div className="accordion-body text-info">
                          Ans.
                          <span className="ms-3 text-dark">{elem.correct_answer}</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            :
            <Loader1 text="Loading your Questions" loaderColor="primary" />
        }
        <div className=' container display-6 rounded my-4 bg-primary p-5'>
          <div className='text-info'>
            Practiced enough?
            <div className="text-light ">You can even take a quiz test.</div>
          </div>
          <div className='mt-2'>
            <NavLink className='btn btn-light px-5 rounded-pill' to="/Quiz">Proceed to Quiz</NavLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionAndAnswers