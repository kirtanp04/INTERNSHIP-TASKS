import React, { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import NavBar from '../NavBar'
import { saveAs } from 'file-saver'

const Qr = () => {
    const [code,setCode] = useState('')
    const download =()=>{
        saveAs(code,'qr.png')
    }
    const Referesh =()=>{
        setCode('')
    }
   
  return (
    <>
        <NavBar/>
        <div className="App">
            <h1 className='qr-div'>QR Code Generator</h1>
        <QRCode value={code} className='qr'/>

        <div className="input-here">
           
            <input className='qr-input' type="text" placeholder='Enter Your Site' value={code} onChange={(e)=>setCode(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-1" type="submit" onClick={download}>Download QR</button>
        <button className='btn btn-primary m-lg-4 '  type="submit" onClick={Referesh}>↻</button>
        
        </div>
    </>
  )
}

export default Qr