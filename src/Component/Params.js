import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Params = () => {
    const {name} = useParams()
    let location = useLocation()
    let navigation = useNavigate()
const Back =()=>{
    navigation('/home')
}

  return (
   <><div className='bag'>
    <h1 className='params-h1'>Hello you type <b>{name}</b></h1>
    <p className='parame-p'>Your current location is <b>{location.pathname}</b> </p>
    
    <button className='params-back' onClick={Back}>Back to Site</button>
    </div></>)
}

export default Params