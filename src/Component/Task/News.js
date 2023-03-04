/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import './App.css'


const News = () => {


  const [news, setNews] = useState([])
 
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9166c288b41743d1a12ac2ff427ad7fe')
    .then((res) => {
      return res.json()
    }).then((datas) => {
      setNews(datas.articles)
    })
  },[])

  return (
    <><NavBar />
     
        
        <div className="containers">
            {
              news.map((value, ind) => {
                return (
                  <div className="carde" key={ind}>
                    <img src={value.urlToImage} alt="Image" class="card-img"/>
                      <div className="carde-body">
                        <h5 className="carde-title">{value.title}</h5>
                        <p className="carde-text">{value.description}</p>
                        <button onClick={()=>{
                          window.open(value.url)
                        }} className="btns">Learn more</button>
                      </div>
                  </div>

                )
              })
            }
        </div>
          

    </>
  )
}

export default News