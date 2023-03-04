/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Toastify from 'toastify-js'
import { dataref } from './firebase'
import './App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const [name,setName]= useState('')
    const [pass,setPass]= useState('')
   const [data,setData]=useState([])


//  Getting data from fire base  
   useEffect(()=>{
    dataref.ref().child('user').on('value',data=>{
        const getData = Object.values(data.val())
        setData(getData)
    })
   },[])
   
   
    const Change =(e)=>{
        setName(e.target.value)
    }
    const Changes =(e)=>{
        setPass(e.target.value)
    }
    const Submit =()=>{
        let validate = false

        if(name === '' || pass === ''){
          return  Toastify({
                text: "Field is empty",
                duration: 1000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "black",
                },
                
              }).showToast();
        }


        data.map((value)=>{
            if(name === value.Name && pass === value.password){
                validate=true
            }
        })
            if(validate){
                navigate('/home')
               setTimeout(()=>{
                Toastify({
                    text: `wellcome ${name} 😄`,
                    duration: 1000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "black",
                    },
                    
                  }).showToast();
               },1000)
            }else{
                Toastify({
                    text: "Name or Pass is wrong",
                    duration: 1000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "black",
                    },
                    
                  }).showToast();
            }
    }

const Forget = ()=>{
    let person = prompt('Enter your username')
    let x = false
    data.map((value)=>{
        if(person===value.Name){
            x= true
            alert('passwor is' + value.password)
        }
    })
    if(x === false){
        alert('No user found')
    }
}
        
const Signup =()=>{
    navigate('/sign-up')
}

    return (
        <>
            <div className="center">
                <input type="checkbox" id="show" />
                
                <div className="container">
                    <label for="show" className="close-btn fas fa-times" title="close"></label>
                    <div className="text">
                        Login Form</div>
                    <form action="#">
                        <div className="data">
                            <label>Name</label>
                            <input type="text" value={name} onChange={Change}  />
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input type="password" value={pass} onChange={Changes}  />
                        </div>
                        <div className="forgot-pass">
                            <button className='forget-btn' onClick={Forget} >Forgot Password?</button></div>
                        <div className="btn">
                            <div className="inner">
                            </div>
                            <button type="submit" onClick={Submit}>login</button>
                        </div>
                        <div className="signup-link">
                            Not a member? <button className='forget-btn' onClick={Signup}>Signup now</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login