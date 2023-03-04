/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import NavBar from '../NavBar'
import './App.css'


const Dictonary = () => {
  const [value, setValue] = useState("hey");
  const [data, setDatas] = useState([]);

  const Search = async () => {
      const data2 = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
      );
      const maindata = await data2.json();

      setDatas(maindata);
      setValue("");
  };

  return (
      <><NavBar/>
      <div>
          <div className="contain">
              <div className="search-box">
                  <input
                      type="text"
                      placeholder="Type the word here.."
                      id="inp-word"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                  />
                  <button onClick={Search} id="search-btn">
                      Search
                  </button>
              </div>
              {data.map((value, i) => {
                  return (
                      console.log(value.meanings[0].definitions[0].definition),
                      <div className="result" id="result" key={Math.random(i)}>
                          <h2 className="result h3">{value.word}</h2>
                          <p className="details">
                              {value.meanings[0].partOfSpeech}
                          </p>
                          <h3 className="word-meaning">{value.meanings[0].definitions[0].definition}</h3>
                          <p className="word-example">{value.meanings[0].definitions[0].example}</p>
                          {/* <audio src={value.phonetics[0].audio}></audio> */}
                      </div>
                  );
              },[])}
          </div>
          </div>
      </>
  );
};

export default Dictonary