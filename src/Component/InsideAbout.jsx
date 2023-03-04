import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const InsideAbout = () => {
    let navigate = useNavigate()
    const Contact =() =>{
        navigate('/contact')
    }
    return (

        <>
            <NavBar />


            <div class="colum card">
                <div class="card-body">
                    <div class="kp-div d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                        <div class="mt-3" className='div-about'>
                            <h4 className=''>Kirtan Patel</h4>
                            <p class="about-p mb-1">Full Stack Developer</p>
                            <p class="about-p-p ">Anand,Gujarat --IN</p>

                            <button class="btns btn-outline-primary" onClick={Contact}>Message</button>
                        </div>
                    </div>



                </div>
                <div class="colum cards-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Kirtan Pankaj Patel
                        </div>
                    </div>
                   <hr />
                    <div class="row">
                        <div class="col-sm-2">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            kirtanpatel6189@gmail.com
                        </div>
                    </div>
                   <hr />
                    <div class="row">
                        <div class="col-sm-2">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            -----------
                        </div>
                    </div>
                   <hr />
                    <div class="row">
                        <div class="col-sm-2">
                            <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            (+91) 7984484483
                        </div>
                    </div>
                   <hr />
                    <div class="row">
                        <div class="col-sm-2">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            Vidhyanagar,Anand,Gujarat ---- IN
                        </div>
                    </div>
                   

                </div>


            </div>
            {/* <div class="card mt-3">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>
                </ul>
            </div> */}



        </>
    )
}

export default InsideAbout