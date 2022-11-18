import React from 'react'
import { NavLink } from 'react-router-dom'
import News from './News'
const Home = () => {
  return (
    <div className="row d-flex align-items-center flex-column-reverse flex-md-row animation-appear-smooth">
      <div className='col-12 my-2 my-md-0 col-md-3'>
        <News />
      </div>
      <div className="col-12 col-md-9">
        <div className='h3'>Hello visitors, we provide a few questions each time you visit this site.
          <br /> You can click on the questions to know the answer to them.
          <br /> You can even filter out questions on the basis of <strong>Category</strong>, <strong>Difficulty</strong> and <strong>Type</strong>.
        </div>
        <NavLink to="/QuestionAndAnswers"><button className='mt-4 btn rounded-pill btn-primary px-5'> Start QnA </button></NavLink>
      </div>
    </div>
  )
}

export default Home