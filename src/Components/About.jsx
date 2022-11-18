import React from 'react'
import aboutImage from './Images/aboutImage0.png'

const About = () => {
  // For random images https://source.unsplash.com/800x800
  return (
    <div className='p-md-5'>
      <div className="row pt-4 p-md-5 justify-content-center align-items-center animation-appear-smooth">
        <div className="col-md-2 contact-image p-0">
          <img className='img-thumbnail contact-image' src={aboutImage} alt="" />
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <span className='display-6'>Hii there, I am Gaurav.</span> <br />
          I'm a frontend web developer from Rajasthan, India. <br /> Have a degree in Bechalor of Computer Applications, <br /> Skilled with various frontend technologies such as <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap 4</strong>, <strong>Bootstrap 5</strong>, <strong>Vanilla JS</strong>(<strong>ES6</strong> to <strong>ES13</strong> ), <strong>JSX</strong> and <strong>ReactJS</strong>. <br /> Below are my professional social media handles through which you can contact.
        </div>
      </div>
      <div className="row justify-content-center pt-3 ">
        <div className="col-10 p-0">
          <div className='alert alert-success d-flex gap-2 gap-md-5'>
            Social Media handles:
            <a href="https://github.com/gaurav-jain000"><i className="fa-brands fa-github text-dark me-2"></i>GitHub</a>
            <a href="mailto:varuag1432+clanknowledgepoint@gmail.com"><i className="fa-solid fa-envelope text-dark me-2"></i>Gmail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About