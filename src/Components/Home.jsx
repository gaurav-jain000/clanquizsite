import React from 'react'
import { NavLink } from 'react-router-dom'
import News from './News'
const Home = ({themeObj}) => {

  return (
    <div className={`row h-100 d-flex align-items-center justify-content-center bg-${themeObj.backgroundColor} flex-column flex-md-row animation-appear-smooth`}>
      <div className='col-12 my-5 my-md-0 col-md-3'>
        <News themeObj={themeObj} />
      </div>
      <div className="col-12 col-md-9 my-5 my-md-0">
        <ul className={`custom h3 text-${themeObj.textColor}`}>
          <li>Hello visitors, we provide a few questions each time you visit this site.</li>
          <li>You can click on the questions to know the answer to them.</li>
          <li>You can even filter out questions on the basis of <strong>Category</strong>, <strong>Difficulty</strong> and <strong>Type</strong>.</li>
        </ul>
        <NavLink to="/QuestionAndAnswers"><button className={`mt-4 btn rounded-pill btn-${themeObj.btnColor} px-5`}> Start QnA </button></NavLink>
      </div>
    </div>
  )
}

export default Home