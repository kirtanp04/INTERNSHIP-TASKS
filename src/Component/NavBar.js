/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { NavLink, useNavigate,Link } from 'react-router-dom'

const NavBar = () => {
  let Navigate = useNavigate()
    const Logout =()=>{
      Navigate('/')
    }


    let x = new Date().toLocaleTimeString()
    const [time,setTime]=useState(x)
const Update =()=>{
    let Y = new Date().toLocaleTimeString()
    setTime(Y)
}
setInterval(Update,1000)

  return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

            
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand" href="//">{time}</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'Black' })}  className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'Black' })} className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'Black' })} className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tasks
          </a>
          <ul class="dropdown-menu">
            <li><NavLink className="dropdown-item" to='/task/add-field'><span className='drop'> Add Field </span></NavLink></li>
            <li><NavLink className="dropdown-item" to='/task/live-image'><span className='drop'> Live Image</span></NavLink></li>
          <li><NavLink className="dropdown-item" to='/task/play-with-image'><span className='drop'>Compress Image</span></NavLink></li>
          <li><NavLink className="dropdown-item" to='/task/resume'><span className='drop'>Resume Builder</span></NavLink></li>
            <li><NavLink className="dropdown-item" to='/task/Qr-code'><span className='drop'> Generate QR </span></NavLink></li>  
            <li><NavLink className="dropdown-item" to='/task/Weather'><span className='drop'> Check Weather</span></NavLink></li>
            <li><NavLink className="dropdown-item" to='/task/news'><span className='drop'> Latest News</span></NavLink></li>
            <li><NavLink className="dropdown-item" to='/task/dictonary'><span className='drop'> Dictonary</span></NavLink></li>
            <li onClick={()=>{window.open('https://kirtan-ai.netlify.app/')}}><Link><span className='drop'>Work with AI</span></Link></li>
          </ul>
        
      </ul>
     
    </div>
  </div>
        <button className='Logout'  onClick={Logout}>Logout</button>
</nav>
</div>
        </div>
    </div>
    </>
  )
}

export default NavBar