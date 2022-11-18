import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
        <div className="container-fluid m-0 p-0 m-md-1 p-md-1">
          <NavLink className="navbar-brand text-info me-0" to="/"><span className='display-6'> Clan Knowledge Point</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} to="/QuestionAndAnswers">QnA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} to="/Quiz">Quiz</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} to="/About">About Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar