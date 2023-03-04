import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  let navigate = useNavigate()
  const Back =()=>{
    navigate('/home')
  }
  return (<>

    <div className='erro-div'>
      <img src="./img/404.png" alt="" srcset="" className='error-img' />
    </div>
      <button className='error-button' onClick={Back}>Back to Site</button>
  </>
  )
}

export default Error