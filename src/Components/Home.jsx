import React from 'react'
import { NavLink } from 'react-router-dom'
import News from './News'
const Home = ({ themeObj }) => {

  return (
    <div className={`row h-100 d-flex align-items-center justify-content-center bg-${themeObj.backgroundColor} flex-column flex-md-row animation-appear-smooth`}>
      <div className='col-12 my-5 my-md-0 col-md-3'>
        <News themeObj={themeObj} />
      </div>
      <div className="col-12 col-md-9 my-5 my-md-0">
        <div className={`h3 text-${themeObj.textColor}`}>
          Clan Quiz Site has 2 sections : <br />
          <p className={`mt-4 text-${themeObj.textColor} h6 border border-secondary rounded-4 p-3`}>
            <span className={`h3 text-${themeObj.btnColor}`}>QnA section</span> <br />
            Here you can practice questions and answers, for more information please visit by clicking button below.<br />
            <NavLink to="/QuestionAndAnswers"><button className={`mt-2 btn rounded-pill btn-${themeObj.btnColor} py-1 px-3`}> Visit QnA Section </button></NavLink>
          </p>
          <p className={`text-${themeObj.textColor} h6 border border-secondary rounded-4 p-3`}>
            <span className={`h3 text-${themeObj.btnColor}`}>Quiz section</span> <br />
            Here you can play quiz test, for more information please visit by clicking button below.<br />
            <NavLink to="/Quiz"><button className={`mt-2 btn rounded-pill btn-${themeObj.btnColor} py-1 px-3`}> Visit Quiz section </button></NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home