/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const About = () => {
  let navigate =useNavigate()
  const View =()=>{
    navigate('/about/about-me')
  }
  return (
    <><NavBar/>
      <section id='header' className='d-flex align-items-center'>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className='row'>


            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className='about-h1'>Wellcome to <strong className='brand-name'>About Page</strong></h1>
              <h2 className="my-3 h2-h2">To work in an environment which encourages me to succeed</h2>
               <div className="mt-3">
                <button className='btn-get-started button5' onClick={View}>View</button>
               </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 header-img">
              <img src='./img/about.png' className='img-fluid animated' alt="home img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About