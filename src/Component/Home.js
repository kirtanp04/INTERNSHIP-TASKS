/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
// import img from './Dummy-4/img/home.png'

const Home = () => {
  return (
    <>
    <NavBar/>
    <section id='header' className='d-flex align-items-center'>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className='row'>


            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Hello!! I am  <br/><strong className='brand-name'> Kirtan Patel</strong></h1>
              <h2 className="my-3">A developer which make the Website</h2>
               <div className="mt-3">
                <NavLink to="/contact" className='btn-get-started'>Contact Me</NavLink>
               </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 header-img">
              <img src='./img/home.png' className='img-fluid animated' alt="home img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home