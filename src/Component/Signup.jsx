/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataref } from './firebase'
import Toastify from 'toastify-js'

const Signup = () => {

    

const [name, setName]=useState({
    fname:'',
    pass:'',
    cpass:''
})



const ChangeName=(e)=>{
    setName({...name,fname:e.target.value})
}
const ChangePass=(e)=>{
    setName({...name,pass:e.target.value})
}
const ChangeFpass=(e)=>{
    setName({...name,cpass:e.target.value})
}

let navigate = useNavigate()




let x = false
const Sign =()=>{
    if(name.fname === '' && name.pass === ''){
        Toastify({
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
    return false
}


if(name.fname.length < 3){
    alert('username must be more than 2 leter 🚫')
    return false
}
if(name.fname.length>20){
    alert('username is too long 🚫')
    return false
}

    if(name.pass === name.cpass ){
         x= true
         Toastify({
            text: "Account Created",
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
         dataref.ref().child('user').push({
            Name:name.fname,
            password:name.pass
        }
        )
    }else{
       alert('conform password not match')
    }
    
    if(x){
        navigate('/')
       
    }
    if(name.pass!== name.cpass){
        return alert('conform password not matched')
    }
    
    


    
}


  return (
    <>
        <div className="center">
                <input type="checkbox" id="show" />
                
                <div className="container">
                    <label for="show" className="close-btn fas fa-times" title="close"></label>
                    <div className="text">
                        Sign-up Form</div>
                    <form action="#">
                        <div className="data">
                            <label>Username</label>
                            <input type="text" value={name.fname} onChange={ChangeName} />
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input type="password" value={name.pass} onChange={ChangePass} />
                        </div>
                        <div className="data">
                            <label>Conform Password</label>
                            <input type="password" value={name.cpass} onChange={ChangeFpass}  />
                        </div>
                       
                        
                        <div className="btn">
                            <div className="inner">
                            </div>
                            <button type="submit" onClick={Sign}>Sign Up</button>
                        </div>
                        
                    </form>
                </div>
            </div>
    </>
  )
}

export default Signup