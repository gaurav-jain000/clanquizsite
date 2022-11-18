import React from 'react'
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import Navbar from './Components/Navbar'
import About from './Components/About'
import QuestionAndAnswers from './Components/QuestionAndAnswers'
import "./style.css"
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='container-fluid vh-100'>
      <div className="row">
        <div className='col m-0 m-md-1'>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="*" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/QuestionAndAnswers" element={<QuestionAndAnswers />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App