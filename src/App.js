
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Error from './Component/Error';

import Login from './Component/Login';
import Add from './Component/Task/Add';
import LiveImage from './Component/Task/LiveImage';
import Params from './Component/Params';
import Signup from './Component/Signup';

import InsideAbout from './Component/InsideAbout';
import Weather from './Component/Task/Weather';
import Qr from './Component/Task/Qr';
import News from './Component/Task/News';
import Dictonary from './Component/Task/Dictonary';
import Header from './Component/Task/Resume/components/Header/Header';
import ImageSize from './Component/Task/Imagesize/ImageSize';
// import Option from './Component/Task/Chat-GPT/Option';





function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/task/add-field' element={<Add/>}></Route>
      <Route path='/task/live-image' element={<LiveImage/>}></Route>
      <Route path='/task/play-with-image' element={<ImageSize/>}></Route>
      <Route path='/task/Weather' element={<Weather/>}></Route>
      <Route path='/task/resume' element={<Header/>}></Route>
      <Route path='/task/news' element={<News/>}></Route>
      <Route path='/task/dictonary' element={<Dictonary/>}></Route>
      {/* <Route path='/task/AI' element={<Option selectOption={selectOption}/>}></Route> */}
      <Route path='/about/about-me' element={<InsideAbout/>}></Route>
      <Route path='/task/Qr-code' element={<Qr/>}></Route>
      <Route path='/home/:name' element={<Params/>}></Route>
      <Route path='/about/:name' element={<Params/>}></Route>
      <Route path='/contact/:name' element={<Params/>}></Route>

      <Route path='*' element={<Error/>}></Route>

      </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;
