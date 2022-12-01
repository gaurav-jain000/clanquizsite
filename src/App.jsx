import React from 'react'
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import Navbar from './Components/Navbar'
import About from './Components/About'
import QuestionAndAnswers from './Components/QuestionAndAnswers'
import "./style.css"
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const themeObj =  {
    backgroundColor: "dark",
    btnColor: "danger",
    textColor: "light"
  };
  return (
    <>
      {/* Main content */}
      <section className={`container-fluid min-vh-100 bg-${themeObj.backgroundColor}`}>
        <div className="row">
          <div className='col m-0 m-md-1'>
            <Navbar themeObj={themeObj} />
          </div>
        </div>
        <Routes>
          <Route path="*" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home themeObj={themeObj} />} />
          <Route path="/QuestionAndAnswers" element={<QuestionAndAnswers themeObj={themeObj} />} />
          <Route path="/Quiz" element={<Quiz themeObj={themeObj} />} />
          <Route path="/About" element={<About themeObj={themeObj} />} />
        </Routes>
      </section>
    </>
  )
}

export default App