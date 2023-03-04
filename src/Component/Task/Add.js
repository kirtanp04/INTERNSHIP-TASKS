/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import Toastify from 'toastify-js'
import NavBar from '../NavBar'

import './App.css'

const Add = () => {
  const [obj, setObj] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);

  useEffect(() => { }, [data, obj])

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setObj({ ...obj, [name]: value });
  };
  const handleClick = (e) => {

    if (obj.name !== '' && obj.email !== '') {

      e.preventDefault();
      setData([...data, obj]);
      setObj({ name: "", email: "" })
    }
    else {
      Toastify({
        text: "Field is Empty...",
        duration: 1500,
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
  };

  return (
    <><NavBar />
      <div className='div-employe'>
        <input
          type="text"
          name="name"
          id="email"
          value={obj.name}
          placeholder="Enter Name"
          onChange={handleChange}
          className='input-employe'
        />
        <input
          type="text"
          name="email"
          id="password"
          value={obj.email}
          placeholder="Enter Email"
          onChange={handleChange}
          className='pass-employe'
        />

        <button type="button" className='button3' value="Add" onClick={handleClick} >Add</button>



        <table id="customers">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </tbody>
          {
            data.map((item, index) => {
              if (item.name !== '' && item.email !== '') {
                return (
                  <>
                    <tbody>
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      </tr>
                    </tbody>
                  </>
                )
              }
            })
          }
        </table>
      </div>
    </>
  )








}

export default Add