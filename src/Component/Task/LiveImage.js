import React,{useState} from 'react'
import NavBar from '../NavBar'
import './App.css'
import { saveAs } from 'file-saver'

const LiveImage = () => {
  const [value,setValue] = useState()
    const Change = (e)=>{
        setValue(e.target.value)
    }
    let x= `https://source.unsplash.com/400x300/?${value}`

    const download =()=>{
      saveAs(x,`${value}.jpeg`)
  }
  return (
    
    <>
      <NavBar/>
      <div className='image-div'>
    <input 
    type="text" 
    name="text" 
    value={value} 
    onChange={Change} 
    className="input1" 
    placeholder="Type your img..."/>
    
    
    <img className='images' src={x} id='img' alt="img" srcSet="" />
    
    
    <button className="btn btn-primary img-button" type="submit" onClick={download}>Download Image</button>
</div> 
    </>
  )
}

export default LiveImage